import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { RESTAURANT_CONFIG } from '../data/config';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'ember_table_cart_v1';
const TABLE_STORAGE_KEY = 'ember_table_active_table';

export const CartProvider = ({ children }) => {
  // 1. Initialize cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load cart from storage:', e);
      return [];
    }
  });

  // 2. Active table (from URL ?table=T05 or saved)
  const [activeTable, setActiveTable] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTable = params.get('table');
      if (urlTable) {
        return urlTable.toUpperCase();
      }
      return localStorage.getItem(TABLE_STORAGE_KEY) || null;
    }
    return null;
  });

  // 3. Order type: 'dine-in' | 'delivery' | 'takeaway'
  const [orderType, setOrderType] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('table')) return 'dine-in';
    }
    return 'dine-in';
  });

  // 4. UI Modals and Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isGroupDiningOpen, setIsGroupDiningOpen] = useState(false);
  const [isWhatsAppFallbackOpen, setIsWhatsAppFallbackOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to storage:', e);
    }
  }, [cartItems]);

  // Sync activeTable to localStorage & auto-switch to dine-in
  useEffect(() => {
    if (activeTable) {
      localStorage.setItem(TABLE_STORAGE_KEY, activeTable);
      setOrderType('dine-in');
    }
  }, [activeTable]);

  // Listen to browser URL changes
  useEffect(() => {
    const handleUrlCheck = () => {
      const params = new URLSearchParams(window.location.search);
      const tableParam = params.get('table');
      if (tableParam) {
        setActiveTable(tableParam.toUpperCase());
        setOrderType('dine-in');
      }
    };

    window.addEventListener('popstate', handleUrlCheck);
    return () => window.removeEventListener('popstate', handleUrlCheck);
  }, []);

  // Cart actions
  const addItem = (item, quantity = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(i => i.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const clearActiveTable = () => {
    setActiveTable(null);
    localStorage.removeItem(TABLE_STORAGE_KEY);
    // Remove query param from URL cleanly without reloading
    if (window.history.pushState) {
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.pushState({ path: newUrl }, '', newUrl);
    }
  };

  const setTableAndMode = (tableId) => {
    setActiveTable(tableId);
    setOrderType('dine-in');
    if (window.history.pushState) {
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?table=${encodeURIComponent(tableId)}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    }
  };

  // Computations
  const totalItemCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const gstAmount = useMemo(() => {
    return Math.round(subtotal * RESTAURANT_CONFIG.gstRate);
  }, [subtotal]);

  const deliveryFee = useMemo(() => {
    if (orderType === 'delivery') {
      return subtotal > 0 ? RESTAURANT_CONFIG.deliveryFee : 0;
    }
    return 0;
  }, [orderType, subtotal]);

  const packagingFee = useMemo(() => {
    if (orderType === 'delivery' || orderType === 'takeaway') {
      return subtotal > 0 ? RESTAURANT_CONFIG.packagingFee : 0;
    }
    return 0;
  }, [orderType, subtotal]);

  const finalTotal = useMemo(() => {
    return subtotal + gstAmount + deliveryFee + packagingFee;
  }, [subtotal, gstAmount, deliveryFee, packagingFee]);

  const getItemQuantity = (itemId) => {
    const item = cartItems.find(i => i.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItemCount,
        subtotal,
        gstAmount,
        deliveryFee,
        packagingFee,
        finalTotal,
        orderType,
        setOrderType,
        activeTable,
        setActiveTable,
        setTableAndMode,
        clearActiveTable,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        getItemQuantity,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isConfirmationOpen,
        setIsConfirmationOpen,
        confirmedOrder,
        setConfirmedOrder,
        isReservationOpen,
        setIsReservationOpen,
        isGroupDiningOpen,
        setIsGroupDiningOpen,
        isWhatsAppFallbackOpen,
        setIsWhatsAppFallbackOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
