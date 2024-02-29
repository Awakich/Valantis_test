import Good from "@/pages/Good"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import { FC } from "react"
import { Routes, Route } from 'react-router-dom'

const App: FC = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Good />} path="/:id" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  )
}

export default App
