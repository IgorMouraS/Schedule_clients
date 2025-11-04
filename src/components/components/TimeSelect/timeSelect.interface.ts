import type { VariantProps } from "class-variance-authority";
import type { timeSelectBgCva } from "./timeSelect.cva";
import type React from "react";
import type { ComponentProps } from "react";


export interface TimeSelectProps extends Omit<ComponentProps<"button">, "disabled">, VariantProps<typeof timeSelectBgCva> {
  className?: string,
  children: React.ReactNode,
}