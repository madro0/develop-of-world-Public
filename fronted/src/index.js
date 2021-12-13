import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import App from './App';
import Student from "./pages/Student";
import Private from './pages/Private';
import Admin from "./pages/Admin";
import UserRegistered from "./components/UsertRegistered";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>

    <Routes> {/* Acá iran las rutas para los que estan logueados en la pagina ya que si no, no tendran acceso */}
      <Route path="/private" element={<Private />}>
        <Route path="UserRegistered" element={<UserRegistered />} />
        <Route path="student" element={<Student />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
