import React from "react";
import Home from "./Home";
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import Myprofile from "./Myprofile";
import Individualprofile from "./Individualprofile";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Registration} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/myprofile" Component={Myprofile} />
          <Route
            path="/individualprofile/:fullname/:mobile/:email/:skills/:id"
            Component={Individualprofile}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
