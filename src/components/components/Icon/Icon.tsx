import { iconCva } from "./icon.cva";
import type { IconProps } from "./icon.interface";


export default function Icon({ color, size, weight = "bold", as: IconComponent, className, ...props }: IconProps) {
  return (
    <IconComponent weight={weight} className={iconCva({ color, size, className })} {...props} />
  )
}