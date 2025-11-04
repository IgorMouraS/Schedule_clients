import { cva } from "class-variance-authority";

export const textCva = cva("", {
  variants: {
    variant: {
      none: "",
      "white": "text-white",
      "yellow-light": "text-yellow-light",
      "yellow": "text-yellow",
      "yellow-dark": "text-yellow-dark",
      "gray-100": "text-gray-100",
      "gray-200": "text-gray-200",
      "gray-300": "text-gray-300",
      "gray-400": "text-gray-400",
      "gray-500": "text-gray-500",
      "gray-600": "text-gray-600",
      "gray-700": "text-gray-700",
      "gray-800": "text-gray-800",
      "gray-900": "text-gray-900"
    },
    size: {
      "title-lg": "text-2xl/6 font-semibold",
      "title-md": "text-base/6 font-semibold",
      "title-sm": "text-sm/5 font-semibold",
      "text-md": "text-base/6 font-normal",
      "text-sm": "text-sm/5 font-light"
    }
  },
  defaultVariants: {
    size: "text-md",
    variant: "gray-900"
  }
})