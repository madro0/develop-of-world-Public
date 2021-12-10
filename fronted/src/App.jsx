// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

// import de cada una de las paginas
import Public from "./pages/Public";
import Student from "./pages/Student";
import Private from './pages/Private';
import Admin from "./pages/Admin";
import UserRegistered from "./components/UsertRegistered";

function App() {

  // aca iran las funciones correspondientes al header de la pagin

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/private" element={<Private />} />
        <Route path="/private/UserRegistered" element={<UserRegistered />} />
        <Route path="/private/student" element={<Student />} />
        <Route path="/private/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
