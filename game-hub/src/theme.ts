import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react";

// ✅ Define Custom Theme Configuration
const customTheme = defineConfig({
  theme: {
    tokens: {
      colors:{
        gray: {
          50: { value: "#f9f9f9" },
          100: { value: "#ededed" },
          200: { value: "#d3d3d3" },
          300: { value: "#b3b3b3" },
          400: { value: "#a0a0a0" },
          500: { value: "#898989" },
          600: { value: "#6c6c6c" },
          700: { value: "#202020" },
          800: { value: "#121212" },
          900: { value: "#111" },
      },
    }
    },
    semanticTokens: {
      colors: {
        bg: {
          default: { value: "gray.50" },
          _dark: { value: "gray.900" },
        },
        text: {
          default: { value: "gray.900" },
          _dark: { value: "gray.50" },
        },
      },
    },
  },
});

// ✅ Create the System Theme
export const system = createSystem(defaultBaseConfig, customTheme);
