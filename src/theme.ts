import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    slate: "#A4B3BF",
    misty: "#DCEEF2",
    seafoam: "#88BABF",
    teal: "#193d50",
    mocha: "#73625C",
    textDark: "#1A2C35",
  },
};

const fonts = {
  heading: `'Open Sans', system-ui, -apple-system, sans-serif`,
  body: `'Inter', system-ui, -apple-system, sans-serif`,
};

const styles = {
  global: {
    "html, body": {
      scrollBehavior: "smooth",
      scrollPaddingTop: "72px",
      color: "brand.textDark",
      bg: "white",
    },
    "*": {
      boxSizing: "border-box",
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: "600",
      borderRadius: "md",
    },
    variants: {
      cta: {
        bg: "brand.teal",
        color: "white",
        _hover: {
          bg: "#4E8E8E",
          transform: "translateY(-1px)",
          boxShadow: "md",
        },
        _active: { bg: "#3E7E7E" },
        transition: "all 0.2s",
      },
      ctaOutline: {
        border: "2px solid",
        borderColor: "brand.teal",
        color: "brand.teal",
        bg: "transparent",
        _hover: {
          bg: "brand.teal",
          color: "white",
          transform: "translateY(-1px)",
        },
        transition: "all 0.2s",
      },
      ctaWhite: {
        bg: "white",
        color: "brand.teal",
        _hover: {
          bg: "brand.misty",
          transform: "translateY(-1px)",
          boxShadow: "md",
        },
        transition: "all 0.2s",
      },
    },
  },
  Heading: {
    baseStyle: {
      color: "brand.textDark",
      lineHeight: "1.2",
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: "none",
        color: "brand.teal",
      },
      transition: "color 0.2s",
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components,
});

export default theme;
