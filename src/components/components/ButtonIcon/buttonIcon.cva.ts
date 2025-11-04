import { cva } from "class-variance-authority";

export const buttonBgCva = cva("inline-flex items-center justify-center", {
  variants: {
    size: {
      md: "h-10 w-10",
    }
  },
  defaultVariants: {
    size: "md"
  }
})

export const buttonIconCva = cva("", {
  variants: {
    variant: {
      primary: "fill-yellow hover:fill-yellow-dark"
    },
    disabled: {
      true: "fill-yellow-dark cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    variant: "primary",
    disabled: false
  }
})