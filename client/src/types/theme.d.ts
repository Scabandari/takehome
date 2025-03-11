declare namespace Theme {
  interface NavbarTheme {
    background: string;
    text: string;
    activeText: string;
    border: string;
  }

  interface FontsTheme {
    primary: string;
    secondary: string;
  }

  interface FontSizesTheme {
    tiny: string;
    small: string;
    medium: string;
    large: string;
  }

  interface LineHeightsTheme {
    tiny: string;
    small: string;
    medium: string;
    large: string;
  }

  interface BordersTheme {
    small: string;
    medium: string;
    large: string;
  }

  interface RadiiTheme {
    none: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    full: string;
  }
}

export interface Theme {
  navbar: Theme.NavbarTheme;
  fonts: Theme.FontsTheme;
  fontSizes: Theme.FontSizesTheme;
  lineHeights: Theme.LineHeightsTheme;
  borders: Theme.BordersTheme;
  radii: Theme.RadiiTheme;
}
