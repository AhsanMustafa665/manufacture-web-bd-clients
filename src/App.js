import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Pages/Blog";
import Home from "./components/Pages/Home/Home";
import Navbar from "./components/Pages/Navbar";
import Footer from "./components/SharedPages/Footer/Footer";

import NotFound from "./components/SharedPages/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
