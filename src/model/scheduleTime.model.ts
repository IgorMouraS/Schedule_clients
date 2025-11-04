export const SCHEDULE_TIME_KEY = 'schedule_time'

export interface ScheduleTimeProps {
  id: string;
  hora: string;
  periodo: string;
}

export const ScheduleTimeList: ScheduleTimeProps[] = [
  {
    id: "1",
    hora: "09:00",
    periodo: "Manhã"
  },
  {
    id: "2",
    hora: "10:00",
    periodo: "Manhã"
  },
  {
    id: "3",
    hora: "11:00",
    periodo: "Manhã"
  },
  {
    id: "4",
    hora: "12:00",
    periodo: "Manhã"
  },
  {
    id: "5",
    hora: "13:00",
    periodo: "Tarde"
  },
  {
    id: "6",
    hora: "14:00",
    periodo: "Tarde"
  },
  {
    id: "7",
    hora: "15:00",
    periodo: "Tarde"
  },
  {
    id: "8",
    hora: "16:00",
    periodo: "Tarde"
  },
  {
    id: "9",
    hora: "17:00",
    periodo: "Tarde"
  },
  {
    id: "10",
    hora: "18:00",
    periodo: "Noite"
  },
  {
    id: "11",
    hora: "19:00",
    periodo: "Noite"
  },
  {
    id: "12",
    hora: "20:00",
    periodo: "Noite"

  },
  {
    id: "13",
    hora: "21:00",
    periodo: "Noite"
  }
]