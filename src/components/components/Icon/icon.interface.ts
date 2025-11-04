import type { VariantProps } from "class-variance-authority";

import { iconCva } from './icon.cva'
import type { ComponentProps } from "react";

export interface IconProps extends Omit<ComponentProps<"i">, "color">, VariantProps<typeof iconCva> {
  as: React.ElementType
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone",
  className?: string
}