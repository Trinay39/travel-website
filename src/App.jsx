import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

import Packages from "./pages/packages";
import Planner from "./pages/planner";

export default function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/packages"
        element={<Packages />}
      />

      <Route
        path="/planner"
        element={<Planner />}
      />

    </Routes>

  );

}