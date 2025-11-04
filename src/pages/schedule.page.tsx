import Schedule from "../components/Schedule/Schedule";
import ScheduleList from "../components/ScheduleList/ScheduleList";

export default function SchedulePage() {
  return (
    <div className="flex">
      <Schedule />
      <ScheduleList />
    </div>
  )
}