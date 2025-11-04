import Text from "../components/Text/Text";

export default function TextFunction() {
  return (
    <div className="flex flex-col gap-1">
      <Text size={'title-lg'} variant={'gray-100'}>Agende um atendimento</Text>
      <Text size={'text-sm'} variant={'gray-300'}>Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
    </div>
  )
}