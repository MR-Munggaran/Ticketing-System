import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast'

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Event from "./pages/Event"
import DetailEvent from "./components/DetailEvent"
import Dashboard from "./pages/Dashboard"
import TicketEvent from "./pages/TicketEvent"
import Validate from "./pages/Validate"

import { useAuthContext } from "./context/AuthContext"
import Ticket from "./pages/Ticket"
import ContactUs from "./pages/ContactUs"

function App() {
  const {authUser} = useAuthContext();

  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/login" element={authUser ? <Navigate to={'/'}/> : <Login/>}/>
        <Route path="/register" element={ authUser ? <Navigate to={'/'}/> : <Register/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/event/:id" element={<DetailEvent/>}/>
        <Route path="/dashboard" element={authUser ? <Dashboard /> : <Navigate to={'/'}/> }/>
        <Route path="/dashboard/event-tickets" element={authUser ? <TicketEvent /> : <Navigate to={'/'}/> }/>
        <Route path="/validate" element={authUser ? <Validate/> : <Navigate to={'/'}/> }/>
        <Route path="/my-ticket" element={authUser ? <Ticket/> : <Navigate to={'/'}/> }/>
      </Routes>
      <Footer/>
      <Toaster/>
    </main>
  )
}

export default App
