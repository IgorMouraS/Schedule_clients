import { createElement } from "react";
import { cardCva } from "./card.cva";
import type { CardProps } from "./card.interface";

export default function Card({ rounded, border, variant, size, as = 'div', className, children, ...props }: CardProps) {
  return createElement(as, { className: (cardCva({ rounded, border, variant, size, className })), ...props }, children)
}