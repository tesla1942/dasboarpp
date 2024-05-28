import { Route, Routes } from "react-router-dom"

import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { Register } from "../pages/Register"
import { Navbar } from "../Navbar"
import { Home } from "../pages/Home"

 const AppRouter = () => {
  return<>
  <Routes>
    <Route path="/" element={<Navbar />} >
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register/>} />
    <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
    </>
  
}
export default AppRouter;
