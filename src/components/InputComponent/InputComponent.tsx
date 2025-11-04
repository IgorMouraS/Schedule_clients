import Input from "../components/Input/Input";
import Text from "../components/Text/Text";

interface InputComponentProps {
  as: React.ElementType;
  title: string;
  inputType: "date" | "text";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputComponent({ as: IconInput, title, inputType, placeholder, value, onChange }: InputComponentProps) {
  return (
    <div className="flex flex-col gap-2">
      <Text size={'title-md'} variant={'gray-200'}>{title}</Text>
      <Input as={IconInput} typeInput={inputType} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}