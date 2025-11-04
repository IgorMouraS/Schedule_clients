import { createElement } from "react";
import type { TextProps } from "./text.interface";

import { textCva } from './text.cva'

export default function Text({ variant, size, as = "span", className, children, ...props }: TextProps) {
  return (
    createElement(as, { className: textCva({ variant, size, className }), ...props }, children)
  )
}