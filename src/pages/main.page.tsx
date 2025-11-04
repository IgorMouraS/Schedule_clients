import Logo from '../components/core/Logo'
import { Outlet } from "react-router";

export default function MainPage() {
  return (
    <div className='flex flex-col'>
      <Logo />
      <div className="flex flex-col flex-1 min-h-screen p-3 justify-center">
        <Outlet />
      </div>
    </div>
  )
}