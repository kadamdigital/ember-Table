import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MASTER_MENU } from '../data/menuData';
import { MenuItemCard } from './MenuItemCard';
import { Search, X, SlidersHorizontal, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const MenuBrowser = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all'); // 'all' | 'veg' | 'non-veg'
  const { totalItemCount, setIsCartOpen } = useCart();

  // Filtered menu items
  const filteredDishes = useMemo(() => {
    return MASTER_MENU.filter((dish) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'all' || dish.category === activeCategory;

      // Dietary filter
      const matchesDiet =
        dietFilter === 'all' ||
        (dietFilter === 'veg' && dish.dietary === 'veg') ||
        (dietFilter === 'non-veg' && dish.dietary === 'non-veg');

      // Search query (case insensitive)
      const matchesSearch =
        searchQuery.trim() === '' ||
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (dish.tag && dish.tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [activeCategory, dietFilter, searchQuery]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setDietFilter('all');
    setSearchQuery('');
  };

  return (
    <section id="full-menu" className="section-padding theme-cream" style={{ borderBottom: '1px solid #EBE4D5' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="eyebrow">CURATED FLAVOURS</span>
          <h2>The Complete Menu</h2>
          <p>Explore handcrafted recipes prepared over charcoal embers and open flame.</p>
        </div>

        {/* Filter Toolbar: Search Bar + Diet Filter + Live Cart Link */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #E5DCC9',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {/* Top row: Search input & dietary toggles */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                flexGrow: 1,
                minWidth: '240px',
                maxWidth: '480px'
              }}
            >
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#8A877E'
                }}
              />
              <input
                type="text"
                placeholder="Search dishes, burgers, pasta, desserts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 2.25rem 0.65rem 2.4rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #D9CDBB',
                  backgroundColor: '#FAF8F5',
                  color: 'var(--color-charcoal)',
                  fontSize: '0.9rem'
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#8A877E',
                    padding: '4px'
                  }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Diet Filter Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#6A675E', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Diet:
              </span>
              <button
                type="button"
                onClick={() => setDietFilter('all')}
                style={{
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: dietFilter === 'all' ? 'var(--color-charcoal)' : '#FAF8F5',
                  color: dietFilter === 'all' ? '#FFFFFF' : '#6A675E',
                  border: dietFilter === 'all' ? '1px solid var(--color-charcoal)' : '1px solid #D9CDBB'
                }}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setDietFilter('veg')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: dietFilter === 'veg' ? '#1E7E34' : '#FAF8F5',
                  color: dietFilter === 'veg' ? '#FFFFFF' : '#1E7E34',
                  border: dietFilter === 'veg' ? '1px solid #1E7E34' : '1px solid #D9CDBB'
                }}
              >
                <span className="diet-badge veg" style={{ width: '12px', height: '12px', borderColor: dietFilter === 'veg' ? '#FFFFFF' : '#1E7E34' }}></span>
                Vegetarian
              </button>
              <button
                type="button"
                onClick={() => setDietFilter('non-veg')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: dietFilter === 'non-veg' ? '#B22222' : '#FAF8F5',
                  color: dietFilter === 'non-veg' ? '#FFFFFF' : '#B22222',
                  border: dietFilter === 'non-veg' ? '1px solid #B22222' : '1px solid #D9CDBB'
                }}
              >
                <span className="diet-badge non-veg" style={{ width: '12px', height: '12px', borderColor: dietFilter === 'non-veg' ? '#FFFFFF' : '#B22222' }}></span>
                Non-Veg
              </button>
            </div>

            {/* Quick Cart button */}
            {totalItemCount > 0 && (
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="btn btn-primary btn-sm"
                style={{ marginLeft: 'auto' }}
              >
                <ShoppingBag size={15} />
                <span>View Cart ({totalItemCount})</span>
              </button>
            )}
          </div>

          {/* Category Pills Bar (Horizontal Scroll on Mobile) */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.4rem',
              scrollbarWidth: 'thin'
            }}
          >
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isActive ? 'var(--color-ember)' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#555249',
                    border: isActive ? '1px solid var(--color-ember)' : '1px solid #E2D7C4',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.86rem', color: '#6A675E' }}>
          <span>
            Showing <strong>{filteredDishes.length}</strong> {filteredDishes.length === 1 ? 'dish' : 'dishes'}
            {searchQuery && ` for "${searchQuery}"`}
          </span>
          {(activeCategory !== 'all' || dietFilter !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={handleResetFilters}
              style={{ color: 'var(--color-ember)', fontWeight: 600, textDecoration: 'underline' }}
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Dishes Grid or Empty State */}
        {filteredDishes.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {filteredDishes.map((dish) => (
              <MenuItemCard key={dish.id} dish={dish} darkTheme={false} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 1.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              border: '1px solid #E5DCC9',
              maxWidth: '560px',
              margin: '2rem auto'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(230, 106, 53, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                color: 'var(--color-ember)'
              }}
            >
              <Search size={28} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
              No dishes found
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#6E6B62', marginBottom: '1.5rem' }}>
              We couldn't find any dishes matching your current search or diet filters.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="btn btn-outline-dark btn-sm"
            >
              Clear filters and view all
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
