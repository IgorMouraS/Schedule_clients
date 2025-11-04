import Icon from "../Icon/Icon";
import { buttonBgCva, buttonIconCva } from "./buttonIcon.cva";
import type { ButtonIconProps } from "./buttonIcon.interface";

export default function ButtonIcon({ size, variant, disabled, iconSize, as: IconComponent, className, ...props }: ButtonIconProps) {
  return (
    <button className={buttonBgCva({ size, className })} {...props}>
      <Icon as={IconComponent} size={iconSize} className={buttonIconCva({ variant, disabled })} />
    </button>
  )
}