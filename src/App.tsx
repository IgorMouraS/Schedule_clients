import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from './pages/main.page';
import ComponentsPage from './pages/components.page';
import SchedulePage from './pages/schedule.page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />}>
          <Route path='/components' element={<ComponentsPage />} />
          <Route index element={<SchedulePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
