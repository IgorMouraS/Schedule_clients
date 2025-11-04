import type { TimeSelectProps } from "./timeSelect.interface";

import Text from './../Text/Text'
import { timeSelectBgCva, timeSelectTextCva } from "./timeSelect.cva";

export default function TimeSelect({ variant, selected, size, disabled, className, children, ...props }: TimeSelectProps) {
  return (
    <button className={timeSelectBgCva({ variant, selected, size, disabled, className })} {...props}>
      <Text variant={'none'} className={timeSelectTextCva({ variant, selected, disabled })}>{children}</Text>
    </button>
  )
}