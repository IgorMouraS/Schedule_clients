import { cva } from "class-variance-authority";

export const containerCva = cva("mx-auto", {
  variants: {
    size: {
      md: "max-w-115 px-2",
      lg: "max-w-180 px-2"
    }
  },
  defaultVariants: {
    size: "md"
  }
})