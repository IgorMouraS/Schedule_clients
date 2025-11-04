import { cva } from "class-variance-authority";

export const cardCva = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "bg-gray-700"
    },
    size: {
      md: "w-[40%] px-2 py-15",
      lg: "w-[60%] px-2 py-15",
      full: 'w-full'
    },
    border: {
      none: "",
      "gray-600": "border border-gray-600",
    },
    rounded: {
      md: "rounded-md"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    border: "none",
    rounded: "md"
  }
})