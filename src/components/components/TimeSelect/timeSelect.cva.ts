import { cva } from "class-variance-authority";

export const timeSelectBgCva = cva("flex justify-center items-center rounded-md", {
  variants: {
    variant: {
      primary: "bg-gray-600 hover:bg-gray-500"
    },
    selected: {
      true: "border border-yellow"
    },
    size: {
      md: "h-10 w-19.5",
      "md-flex": "min-h-10 min-w-19.5"
    },
    disabled: {
      true: "cursor-not-allowed bg-transparent border border-gray-600",
      false: "cursor-pointer"
    }
  },
  compoundVariants: [
    {
      variant: "primary",
      selected: true,
      class: "bg-gray-600 hover:bg-gray-600",
    },
  ],
  defaultVariants: {
    variant: "primary",
    selected: false,
    size: 'md',
    disabled: false
  }
})

export const timeSelectTextCva = cva("flex justify-center items-center rounded-md", {
  variants: {
    variant: {
      primary: "text-gray-200",
    },
    selected: {
      true: "text-yellow"
    },
    disabled: {
      true: "text-gray-600",
    }
  },
  defaultVariants: {
    variant: "primary",
    selected: false,
    disabled: false
  }
})