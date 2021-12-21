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
import Login from './pages/Login';
import { CreateProject } from './pages/CreateProject'; 
import { UpdateProject } from './pages/UpdateProject'; 
import Administrador from './pages/Administrador';
import UserRegistered from "./components/UsertRegistered";
import PageNotFound from './pages/PageNotFound';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Lider from './layouts/Lider';
import MyProjects from './components/MyProjects';
import Estudiante from './layouts/Estudiante';
import Postulaciones from './components/Postulaciones';
import ProjectsEstudent from './components/ProjectsEstudent';

import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Project } from './pages/CreateProject';
import StudentRegistered from './components/StudentRegistered';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
})
const authLink = setContext((_, {})=>{

})
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink) 
})

ReactDOM.render(
  <ApolloProvider client={client}>
  <Router>
    <Routes> {/* Acá iran las rutas para los que estan logueados en la pagina ya que si no, no tendran acceso */}
      <Route path="/" element={<App />} />

      <Route path="/administrador" element={<Administrador />}>
        <Route path="/administrador" element={<UserRegistered />} />
        <Route path="UserRegistered" element={<UserRegistered />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="/lider" element={<Lider />}>
        <Route path="/lider" element={<Projects />} /> {/*Pagina que carga por defecto */}
        <Route path="UserRegistered" element={<UserRegistered />} />
        <Route path="StudentRegistered" element={<StudentRegistered />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Projects/newproject" element={<CreateProject />} />
        <Route path="Projects/updateproject" element={<UpdateProject />} />
        <Route path="student" element={<Student />} />
        <Route path="profile" element={<Profile />} />
        <Route path="myProjects" element={<MyProjects />} />
      </Route>

      <Route path="/estudiante" element={<Estudiante />}>
        {/* <Route path="/estudiante" element={<Postulaciones />} /> */}
        <Route path="/estudiante" element={<Postulaciones />} />
        <Route path="proyectos" element={<Postulaciones />} />
        <Route path="projectsEstudent" element={<ProjectsEstudent />} />
      </Route>

      <Route path="/login" element={<Login/>}>

      </Route>

      <Route path="*" element={<PageNotFound />} />  {/* Para cuando no se encuentre la pagina */}
    </Routes>
  </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
