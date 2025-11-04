import { cva } from "class-variance-authority";

export const iconCva = cva("", {
  variants: {
    color: {
      white: "fill-white",
      "gray-300": "fill-gray-300",
      yellow: "fill-yellow",
      "yellow-dark": "fill-yellow-dark"
    },
    size: {
      md: "h-8 w-8",
      sm: "h-5 w-5",
      xs: "h-4 w-4",
    }
  },
  defaultVariants: {
    color: "white",
    size: "md"
  }
})