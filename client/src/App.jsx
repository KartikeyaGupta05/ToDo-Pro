import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/RegisterPage.jsx";
import Login from "./pages/LoginPage.jsx";
import Home from "./pages/HomePage.jsx";
import UserProtectWrapper from "./pages/userProtectWrapper.jsx";
import Logoutpage from "./pages/LogoutPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route path="/logout" element={<UserProtectWrapper><Logoutpage /></UserProtectWrapper>} />
      </Routes>
    </>
  );
}

export default App;
