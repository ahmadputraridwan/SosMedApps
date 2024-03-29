import MyProfile from "./components/MyProfile"
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from "./pages/Register"
import Profile from "./pages/Profile"



const App: React.FC = () => {

  return (
    <Routes>
     <Route path="/" element={<Home />}/>
     {/* <Route path="profile" element={<MyProfile/>}/> */}
     <Route path="login" element={<Login/>}/>
     <Route path="register" element={<Register/>}/>
     <Route path="profile" element={<Profile/>}/>
    </Routes>
  
  )
}

export default App
