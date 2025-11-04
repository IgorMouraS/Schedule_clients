import type { VariantProps } from "class-variance-authority";

import { buttonBgCva, buttonTextCva } from './button.cva'
import type { ComponentProps } from "react";

export interface ButtonProps extends Omit<ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonBgCva>, VariantProps<typeof buttonTextCva> {
  className?: string,
  children: React.ReactNode,
  typeButton?: "button" | "submit"
}