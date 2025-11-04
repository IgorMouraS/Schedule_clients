import { useLocalStorage } from 'usehooks-ts'

import { SCHEDULE_CLIENTS_KEY, type ScheduledClientsProps } from '../model/scheduleClients.model'

export function useScheduledClients() {
  const [scheduleClients, setScheduleClients] = useLocalStorage<ScheduledClientsProps[]>(SCHEDULE_CLIENTS_KEY, [])

  function addSchedule(date: Date, timeId: string, nome: string) {
    setScheduleClients([...scheduleClients, {
      id: Math.random().toString(36).substring(2, 9),
      date: date,
      timeId: timeId,
      nome: nome
    }])
  }

  function deleteSchedule(id: string) {
    setScheduleClients(scheduleClients.filter((schedule) => schedule.id !== id))
  }

  return {
    scheduleClients,
    addSchedule,
    deleteSchedule
  }
}