import Text from '../Text/Text'
import type { ButtonProps } from './button.interface'

import { buttonBgCva, buttonTextCva } from './button.cva'

export default function Button({ typeButton = 'button', variant, size, disabled, fontSize, colorText, className, children, ...props }: ButtonProps) {
  return (
    <button type={typeButton} className={buttonBgCva({ variant, size, disabled, className })} {...props}>
      <Text className={buttonTextCva({ fontSize, colorText })}>{children}</Text>
    </button>
  )
}