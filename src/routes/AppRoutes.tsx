import { Route, Routes } from 'react-router'

import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} index path="/" />
    </Routes>
  )
}
