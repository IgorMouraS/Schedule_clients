import type { VariantProps } from "class-variance-authority";
import type { buttonIconCva, buttonBgCva } from "./buttonIcon.cva";
import type { ComponentProps } from "react";
import type { iconCva } from "../Icon/icon.cva";

type IconVariants = VariantProps<typeof iconCva>

export interface ButtonIconProps extends Omit<ComponentProps<"button">, "disabled">, VariantProps<typeof buttonIconCva>, VariantProps<typeof buttonBgCva> {
  as: React.ElementType,
  className?: string,
  iconSize?: IconVariants["size"]
}