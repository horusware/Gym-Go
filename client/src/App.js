import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Detail from "./views/Detail/Detail";
import Nav from "./components/Nav/Nav";
import FormCreateActivities from "./views/FormCreateActivities/FormCreateActivities";
import Profesores from './views/Profesores/Profesores'; //Se volvio a agregar la ruta profesores por que no estaba
import PaquetesClases from './views/PaquetesClases/PaquetesClases'
import FormGoals from "./views/FormGoals/FormGoals";
import Footer from "./components/Footer/Footer";
import FormClasses from "./views/FormClasses/FormClasses";
import ActivitiesV from "./views/ActivitiesV/ActivitiesV";
import Admin from "./views/Admin/Admin";
import Dashboard from "./views/Admin/scenes/Dashboard/Dashboard"
import Users from "./views/Admin/scenes/Users/Users";
import Activities from "./views/Admin/scenes/Tables/ActivitiesData";
import Coaches from "./views/Admin/scenes/Tables/CoachesData";
import Form from "./views/Admin/scenes/Forms/Form";
import ClassesForm from "./views/Admin/scenes/Forms/creteClases";
import Classes from "./views/Classes/Classes";

import axios from "axios";
import CreateGoals from "./views/Admin/scenes/Forms/createGoals";

axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "https://gym-go-production.up.railway.app"

function App() {
  let location = useLocation();

  return (
    <div className="App">
      {/* {location.pathname !== "/" &&
        location.pathname !== "/admin" &&
        location.pathname !== "/admin/team" && <Nav />} */}
      {location.pathname === "/" ||
      location.pathname.includes("/admin") ? undefined : (
        <Nav />
      )}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/activities" element={<ActivitiesV />} />
        <Route path="/activity-detail/:id" element={<Detail />} />
        <Route path="/create-activity" element={<FormCreateActivities />} />
        <Route path="/create-goals" element={<FormGoals />} />
        <Route path="/coaches" element={<Profesores />} />
        <Route path="/create-goals" element={<FormGoals />} />
        <Route path="/create-classes" element={<FormClasses />} />
        <Route path="/prices" element={<PaquetesClases />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="activities" element={<Activities />} />
          <Route path="coaches" element={<Coaches />} />
          <Route path="usersCreate" element={<Form />} />
          <Route path="classesCreate" element={<ClassesForm />} />
          <Route path="goalsCreate" element={<CreateGoals />} />
        </Route>
      </Routes>
      {location.pathname !== "/" &&
        location.pathname !== "/admin/" &&
        location.pathname !== "/admin/team" && <Footer />}

    </div>
  );
}

export default App;
