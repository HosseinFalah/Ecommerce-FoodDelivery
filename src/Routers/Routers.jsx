import { Routes, Route, Navigate  } from "react-router-dom";
import { AllFoods, Cart, CheckOut, Contact, FoodDetails, Home, Login, Register } from "../Pages/Index";

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/foods" element={<AllFoods/>}/>
        <Route path="/foods/:id" element={<FoodDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default Routers