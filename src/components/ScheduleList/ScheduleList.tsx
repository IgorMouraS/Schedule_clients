import { CalendarBlankIcon, CloudSunIcon, MoonStarsIcon, SunHorizonIcon, TrashIcon } from "@phosphor-icons/react";
import Card from "../components/Card/Card";
import Container from "../components/Container/Container";
import Input from "../components/Input/Input";
import Text from "../components/Text/Text";
import Icon from "../components/Icon/Icon";
import { useScheduledClients } from "../../hooks/use-scheduledClients";
import { useScheduleTime } from "../../hooks/use-scheduleTime";
import type { ScheduledClientsProps } from "../../model/scheduleClients.model";
import type { ScheduleTimeProps } from "../../model/scheduleTime.model";
import { useState } from "react";

type ClientWithTime = ScheduledClientsProps & Omit<ScheduleTimeProps, "id">;

const periodOrder = ["Manhã", "Tarde", "Noite"]

export default function ScheduleList() {
  const [date, setDate] = useState(new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString().split("T")[0])
  const { scheduleClients, deleteSchedule } = useScheduledClients()
  const { scheduleTime } = useScheduleTime()

  function handleDelete(id: string) {
    deleteSchedule(id)
  }

  return (
    <Card variant={'none'} size={'lg'}>
      <Container size={'lg'} className="flex flex-col gap-8">
        <div className="flex gap-3">
          <div className="flex flex-col flex-1 gap-1">
            <Text size={'title-lg'} variant={'gray-100'}>Sua agenda</Text>
            <Text size={'text-sm'} variant={'gray-300'}>Consulte os seus cortes de cabelo agendados por dia</Text>
          </div>
          <Input as={CalendarBlankIcon} typeInput="date" className="w-auto" size={'sm'} value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="flex flex-col gap-3">
          {periodOrder.map((period) => {
            const clientList = scheduleClients.map((client) => {
              const time = scheduleTime.find((time) => time.id == client.timeId)
              const { id, ...filteredTime } = time
              return { ...client, ...filteredTime }
            })
            const scheduledPeriod = clientList.filter((client) => {
              return client.periodo === period && client.date.toString().split("T")[0] == date
            })
            const IconPeriodo = period == "Manhã" ? SunHorizonIcon : period == "Tarde" ? CloudSunIcon : MoonStarsIcon
            return (
              <Card border={'gray-600'} variant={'none'} size={'full'} key={period}>
                <div className="flex py-3 px-5 border-b border-gray-600 gap-3">
                  <Icon as={IconPeriodo} color={'yellow'} size={'sm'} />
                  <Text size={'text-sm'} variant={'gray-300'} className="flex-1">{period}</Text>
                  <Text size={'text-sm'} variant={'gray-300'}>09h-12h</Text>
                </div>
                <div className="flex p-5 ">
                  <ul className=" flex flex-col gap-4 list-none p-0 m-0 w-full">
                    {scheduledPeriod.some((hora) => hora.nome !== "") ? (
                      <>
                        {scheduledPeriod.map((hora: ClientWithTime) => {
                          if (hora.nome == "") return
                          return (
                            <li className="flex gap-9 justify-center items-center" key={hora.id}>
                              <Text size={'title-md'} variant={'gray-200'} >{hora.hora}</Text>
                              <Text size={'text-md'} variant={'gray-300'} className="flex-1">{hora.nome}</Text>
                              <Icon as={TrashIcon} color={'yellow'} size={'xs'} onClick={() => handleDelete(hora.id)} />
                            </li>
                          )
                        })
                        }
                      </>
                    ) : (
                      <li className="flex justify-center items-center">
                        <Text size={'text-md'} variant={'gray-400'} >Você ainda não tem agendamentos cadastrados nesse período.</Text>
                      </li>
                    )}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </Card >
  )
}