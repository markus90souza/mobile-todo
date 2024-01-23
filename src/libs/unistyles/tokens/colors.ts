import { Colors } from "../interfaces/colors";

export const defaultColors: Colors = {
  brand: { 
    "purple-dark": "#5E60CE",
    "blue-dark": "#1E6F9F",
    blue: "#4EA8DE",
    purple: "#8284FA",
    danger: "#E25858"
  },
  base: {
    "gray-100": "#F2F2F2",
    "gray-200": "#D9D9D9",
    "gray-300": "#808080",
    "gray-400": "#333333",
    "gray-500": "#262626",
    "gray-600": "#1A1A1A",
    "gray-700": "#0D0D0D"
  }
} as const