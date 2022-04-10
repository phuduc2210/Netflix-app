import "./app.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router ,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/login" element={<Login/>}/>
        <Route exact path ="/register" element={<Register/>}/>
        <Route exact path ="/watch" element={<Watch/>}/>
      </Routes>
    </Router>
  )
}
