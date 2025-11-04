import Icon from "../Icon/Icon";
import type { InputProps } from "./input.interface";

import { inputBgCva, inputCva } from "./input.cva";
import { CaretDownIcon } from "@phosphor-icons/react";
import { useRef } from "react";

export default function Input({ value, onChange, typeInput = 'text', variant, size, placeholder, iconColor = 'yellow', iconSize = 'sm', as: IconComponent, className }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleOpenCalendar() {
    if (typeInput == "date") {
      inputRef.current?.showPicker?.();
    }
  }

  return (
    <div className={inputBgCva({ variant, size, className })} onClick={handleOpenCalendar}>
      <Icon as={IconComponent} color={iconColor} size={iconSize} />
      <input type={typeInput} placeholder={placeholder} className={inputCva({ variant })} ref={inputRef} value={value} onChange={onChange} />
      {typeInput == 'date' && (
        <>
          <Icon as={CaretDownIcon} color={'gray-300'} size={'xs'} />
        </>
      )}
    </div>
  )
}