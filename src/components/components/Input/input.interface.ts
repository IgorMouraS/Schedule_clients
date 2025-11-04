import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import type { iconCva } from "../Icon/icon.cva";
import type { inputBgCva } from "./input.cva";

type IconVariants = VariantProps<typeof iconCva>

export interface InputProps extends ComponentProps<"div">, VariantProps<typeof inputBgCva> {
  className?: string,
  as: React.ElementType,
  placeholder?: string,
  iconColor?: IconVariants["color"],
  iconSize?: IconVariants["size"],
  typeInput?: "text" | "date",
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}