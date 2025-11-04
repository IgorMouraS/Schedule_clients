import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import type { containerCva } from "./container.cva";

export interface ContainerProps extends ComponentProps<"div">, VariantProps<typeof containerCva> {
  as?: keyof React.JSX.IntrinsicElements,
  className?: string,
  children: React.ReactNode
}