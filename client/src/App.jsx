import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/RegisterPage.jsx";
import Login from "./pages/LoginPage.jsx";
import Home from "./pages/HomePage.jsx";
import UserProtectWrapper from "./pages/userProtectWrapper.jsx";
import Logoutpage from "./pages/LogoutPage.jsx";
import PendingTaskPage from "./pages/PendingTaskPage.jsx";
import CompleteTaskPage from "./pages/CompleteTaskPage.jsx";
import DashBoardPage from "./pages/DashBoardPage.jsx";

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
        <Route
          path="/logout"
          element={
            <UserProtectWrapper>
              <Logoutpage />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/pending-tasks"
          element={
            <UserProtectWrapper>
              <PendingTaskPage />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/completed-tasks"
          element={
            <UserProtectWrapper>
              <CompleteTaskPage />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/profile"
          element={
            <UserProtectWrapper>
              <DashBoardPage />
            </UserProtectWrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
