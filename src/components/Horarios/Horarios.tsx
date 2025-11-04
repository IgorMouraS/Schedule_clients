import { useScheduleTime } from "../../hooks/use-scheduleTime"
import { type ScheduleTimeProps } from "../../model/scheduleTime.model"
import Text from "../components/Text/Text"
import TimeSelect from "../components/TimeSelect/TimeSelect"
import { useScheduledClients } from "../../hooks/use-scheduledClients";

interface HorariosProps {
  onSelectHora: (id: string) => void;
  data: string;
  selectedHora: string
}

const periodOrder = ["Manhã", "Tarde", "Noite"]

export default function Horarios({ onSelectHora, data, selectedHora }: HorariosProps) {
  const { scheduleTime } = useScheduleTime()
  const { scheduleClients } = useScheduledClients()

  function handleClick(e: React.MouseEvent<HTMLButtonElement>, id: string) {
    e.preventDefault();
    onSelectHora(id)
  }

  return (
    <div className="flex flex-col gap-2">
      <Text size={'title-md'} variant={'gray-200'}>Horários</Text>
      <div className="flex flex-col gap-3">
        {periodOrder.map((period) => {
          const periodTime = scheduleTime.filter((time) => time.periodo == period)
          return (
            <div className="flex flex-col gap-2" key={period}>
              <Text size={'title-md'} variant={'gray-200'}>{period}</Text>
              <div className="flex gap-2">
                {periodTime.map((hora: ScheduleTimeProps) => {
                  const disabled = scheduleClients.find((scheduled) => scheduled.timeId == hora.id && scheduled.date.toString().split("T")[0] === data)
                  const isSelected = selectedHora == hora.id && !disabled
                  return <TimeSelect key={hora.id} disabled={!!disabled} selected={isSelected} onClick={(e) => handleClick(e, hora.id)}>{hora.hora}</TimeSelect>
                })}
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}