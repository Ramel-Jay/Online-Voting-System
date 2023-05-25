import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Admin from "./pages/login_admin";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/voters" exact element={<Login/>}/>
          <Route path="/voters/admin" exact element={<Admin/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
