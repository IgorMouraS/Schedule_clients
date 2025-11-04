import { useLocalStorage } from 'usehooks-ts'

import { SCHEDULE_TIME_KEY, type ScheduleTimeProps, ScheduleTimeList } from '../model/scheduleTime.model'

export function useScheduleTime() {
  const [scheduleTime] = useLocalStorage<ScheduleTimeProps[]>(SCHEDULE_TIME_KEY, ScheduleTimeList)

  return {
    scheduleTime
  }
}