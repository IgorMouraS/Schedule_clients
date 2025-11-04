import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import type { cardCva } from "./card.cva";

export interface CardProps extends ComponentProps<"div">, VariantProps<typeof cardCva> {
  as?: keyof React.JSX.IntrinsicElements,
  className?: string,
  children: React.ReactNode
}