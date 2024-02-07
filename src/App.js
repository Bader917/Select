import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/Navbar";
import LoginStudent from "./Pages/LoginStudent";
import LoginAdmin from "./Pages/LoginAdmin";
import Schedules from "./Pages/Schedules";
import LecSchedules from "./Pages/LecSchedules";
import SecSchedules from "./Pages/SecSchedules";
import MainSchedules from "./Pages/MainSchedules";
import SelectPages from "./Pages/SelectPages";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginstudent" element={<LoginStudent />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/lecschedules" element={<LecSchedules />} />
          <Route path="/secschedules" element={<SecSchedules />} />
          <Route path="/MainSchedules" element={<MainSchedules />} />
          <Route path="/SelectPages" element={<SelectPages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
