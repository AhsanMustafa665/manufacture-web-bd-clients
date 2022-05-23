import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Blog from "./components/Pages/Blog";
import Home from "./components/Pages/Home/Home";
import Navbar from "./components/Pages/Navbar";
import Footer from "./components/SharedPages/Footer/Footer";

import NotFound from "./components/SharedPages/NotFound";
import Signup from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
