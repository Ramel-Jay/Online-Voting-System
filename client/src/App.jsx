import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Admin from "./pages/login_admin";
import Welcome from "./pages/welcome";
import AdminRegister from "./pages/Admin/register";
import AdminWelcome from "./pages/Admin/welcome";
import AdminDashbord from "./pages/Admin/dashboard"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/voters" exact element={<Login/>}/>
          <Route path="/voters/admin" exact element={<Admin/>}/>
          <Route path="/" exact element={<Welcome/>}/>
          <Route path="/admin/register" exact element={<AdminRegister/>}/>
          <Route path="/admin" exact element={<AdminWelcome/>}/>
          <Route path="/admin/dashboard" exact element={<AdminDashbord/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
