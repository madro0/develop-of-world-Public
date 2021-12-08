// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Public from "./pages/Public";
import Private from './pages/Private';
import Admin from "./pages/Admin";

function App() {

  // aca iran las funciones correspondientes al header de la pagin

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/private" element={<Private />} />
        <Route path="/private/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
