import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import RequireAuth from "./components/Login/RequireAuth";
import Blog from "./components/Pages/Blog";
import AddReview from "./components/Pages/Dashboard/AddReview";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MyOrders from "./components/Pages/Dashboard/MyOrders";
import MyProfile from "./components/Pages/Dashboard/MyProfile";
import MyReview from "./components/Pages/Dashboard/MyReview";
import Home from "./components/Pages/Home/Home";
import Purchase from "./components/Pages/Home/Purchase";
import MyPortfolio from "./components/Pages/MyPortfolio";
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
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route path="/purchase/:id" element={<Purchase />}></Route>
        <Route path="signup" element={<Signup />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="order" element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path="portfolio" element={<MyProfile></MyProfile>}></Route>
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
