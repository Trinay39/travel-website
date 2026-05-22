import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

import Planner from "./pages/planner";

function App(){

return(

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/login" element={<Login/>} />

<Route path="/signup" element={<Signup/>} />

<Route element={<MainLayout/>}>

<Route
path="/planner"
element={<Planner/>}
/>

</Route>

</Routes>

)

}

export default App