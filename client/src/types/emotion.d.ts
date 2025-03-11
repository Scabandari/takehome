import '@emotion/react';
import { Theme as LocalTheme } from './theme';

declare module '@emotion/react' {
  export interface Theme extends LocalTheme {}
}
