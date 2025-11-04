export const SCHEDULE_CLIENTS_KEY = 'schedule_clients'

export interface ScheduledClientsProps {
  id: string,
  date: Date;
  nome: string,
  timeId: string
}

export const ScheduledClients: ScheduledClientsProps[] = [
  {
    id: "1",
    date: new Date(),
    nome: "Igor Moura",
    timeId: "1"
  },
  {
    id: "3",
    date: new Date(),
    nome: "Ryan Dorwart",
    timeId: "3"
  },
  {
    id: "5",
    date: new Date(),
    nome: "Livia Curtis",
    timeId: "5"
  },
  {
    id: "6",
    date: new Date(),
    nome: "Randy Calzoni",
    timeId: "6"
  },
  {
    id: "8",
    date: new Date(),
    nome: "Marley Franci",
    timeId: "8"
  },
  {
    id: "9",
    date: new Date(),
    nome: "Jaylon Korsgaard",
    timeId: "9"
  },
  {
    id: "13",
    date: new Date(),
    nome: "Maria Herwitz",
    timeId: "13"
  },
]