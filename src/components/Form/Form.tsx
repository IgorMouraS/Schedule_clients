import { CalendarBlankIcon, UserSquareIcon } from "@phosphor-icons/react";
import Button from "../components/Button/Button";
import Horarios from "../Horarios/Horarios";
import InputComponent from "../InputComponent/InputComponent";
import { useState } from "react";
import { useScheduledClients } from "../../hooks/use-scheduledClients";

export default function Form() {
  const { addSchedule } = useScheduledClients();

  const [data, setData] = useState(new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString().split("T")[0]);
  const [hora, setHora] = useState("");
  const [cliente, setCliente] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (data !== "" && hora !== "" && cliente !== "") {
      addSchedule(new Date(data), hora, cliente)
      setData(new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString().split("T")[0])
      setHora("")
      setCliente("")
    }
  }

  return (
    <form action="" className="flex flex-col gap-8" onSubmit={(e) => handleSubmit(e)}>
      <InputComponent as={CalendarBlankIcon} title="Data" inputType="date" value={data} onChange={(e) => setData(e.target.value)} />
      <Horarios onSelectHora={(value: string) => setHora(value)} data={data} selectedHora={hora} />
      <InputComponent as={UserSquareIcon} title="Cliente" inputType="text" placeholder="Nome" value={cliente} onChange={(e) => setCliente(e.target.value)} />
      <Button typeButton={'submit'}>AGENDAR</Button>
    </form>
  )
}