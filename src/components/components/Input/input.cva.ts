import { cva } from "class-variance-authority";

export const inputBgCva = cva("flex justify-center items-center", {
  variants: {
    variant: {
      primary: "border border-gray-400 rounded-md focus-within:border-yellow-dark"
    },
    size: {
      md: "h-12 w-full p-3 gap-2",
      sm: "h-12 w-38 p-3 gap-2"
    },
    error: {
      true: "border border-red rounded-md"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})

export const inputCva = cva("flex-1", {
  variants: {
    variant: {
      primary: "caret-gray-200 text-gray-200 placeholder:text-base/6 placeholder:font-normal placeholder:text-gray-400 focus:placeholder-transparent focus:outline-none appearance-none bg-transparent"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})