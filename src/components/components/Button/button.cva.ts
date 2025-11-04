import { cva } from "class-variance-authority";

export const buttonBgCva = cva("flex justify-center items-center rounded-md", {
  variants: {
    variant: {
      none: "",
      primary: "bg-yellow hover:border-2 hover:border-solid hover:border-yellow-light"
    },
    size: {
      md: "w-full h-14"
    },
    disabled: {
      true: "bg-yellow-dark cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false
  }
})

export const buttonTextCva = cva("", {
  variants: {
    fontSize: {
      "title-lg": "text-3xl/6 font-semibold",
      "title-md": "text-base/6 font-semibold",
      "title-sm": "text-sm/5 font-semibold",
      "text-md": "text-base/6 font-normal",
      "text-sm": "text-sm/5 font-normal"
    },
    colorText: {
      "gray-900": "text-gray-900"
    }
  },
  defaultVariants: {
    fontSize: "title-sm",
    colorText: "gray-900"
  }
})