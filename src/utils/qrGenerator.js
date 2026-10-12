import QRCode from 'qrcode';

/**
 * Generates a data URL for a QR Code
 * @param {string} text - URL or text to encode
 * @param {object} options - Custom styling options
 * @returns {Promise<string>}
 */
export const generateQRCodeDataUrl = async (text, options = {}) => {
  try {
    const defaultOptions = {
      width: 280,
      margin: 2,
      color: {
        dark: '#171715',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'M',
      ...options
    };
    return await QRCode.toDataURL(text, defaultOptions);
  } catch (err) {
    console.error('Error generating QR code:', err);
    return null;
  }
};

/**
 * Constructs the canonical Table Ordering URL using current site origin
 * Supports URL pattern /menu?table=T05 or window.location.origin + ?table=T05
 * @param {string} tableId e.g. "T05"
 * @returns {string} full URL
 */
export const getTableOrderUrl = (tableId) => {
  const origin = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : 'https://the-ember-table.concept';
  
  const pathname = typeof window !== 'undefined' && window.location.pathname
    ? window.location.pathname
    : '/';

  return `${origin}${pathname}?table=${encodeURIComponent(tableId)}`;
};
