import { Route, Routes } from 'react-router'

import { Home } from '../pages/Home'
import { Products } from '../pages/Products'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} index path="/" />
      <Route element={<Products />} path="/products" />
    </Routes>
  )
}
