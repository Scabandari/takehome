import { Theme } from './types/theme';

export const theme: Theme = {
  navbar: {
    background: '#F5F5F4',
    text: '#1F2937',
    activeText: '#3B82F6',
    border: '#F3F4F6',
  },
  fonts: {
    primary: 'Manrope, sans-serif',
    secondary: 'Libre Baskerville, serif',
  },
  fontSizes: {
    tiny: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
  },
  lineHeights: {
    tiny: '16px',
    small: '20px',
    medium: '24px',
    large: '28px',
  },
  borders: {
    small: '1px',
    medium: '2px',
    large: '3px',
  },
  radii: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '12px',
    xlarge: '16px',
    full: '999px', // Effectively a circle/pill shape for most elements
  },
};
