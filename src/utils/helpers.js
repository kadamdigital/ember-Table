// Helper utility functions

export const formatPrice = (amount) => {
  if (typeof amount !== 'number') return `₹${amount}`;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const generateOrderNumber = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `EMB-${code}`;
};

export const generateReservationRef = () => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `EMB-RES-${randomNum}`;
};

export const getTodayDateString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const generateWhatsAppMessage = ({ orderNumber, items, total, orderType, customerInfo }) => {
  let message = `*NEW DEMO ORDER — THE EMBER TABLE*\n`;
  message += `Order Reference: *#${orderNumber}*\n`;
  message += `Order Type: *${orderType.toUpperCase()}*\n`;
  
  if (orderType === 'dine-in') {
    message += `Table: *${customerInfo.tableNumber || 'N/A'}*\n`;
    message += `Customer Name: ${customerInfo.name || 'Dine-in Guest'}\n`;
  } else if (orderType === 'delivery') {
    message += `Customer Name: ${customerInfo.name}\n`;
    message += `Phone: ${customerInfo.phone}\n`;
    message += `Delivery Address: ${customerInfo.address}\n`;
    if (customerInfo.instructions) {
      message += `Instructions: ${customerInfo.instructions}\n`;
    }
  } else {
    message += `Customer Name: ${customerInfo.name}\n`;
    message += `Phone: ${customerInfo.phone}\n`;
    message += `Pickup Time: ${customerInfo.pickupTime}\n`;
  }

  message += `\n*ORDER ITEMS:*\n`;
  items.forEach(item => {
    message += `• ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}\n`;
  });

  message += `\n*TOTAL BILL:* ${formatPrice(total)}\n`;
  message += `\n_(This is a demo order generated from The Ember Table digital experience portfolio concept by Kadam Digital.)_`;

  return message;
};
