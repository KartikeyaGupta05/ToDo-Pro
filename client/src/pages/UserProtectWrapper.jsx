import React from "react";
import { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
    // If user is not logged in or token is not present, redirect to login page
  useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    });

  return <> {children} </>;
};

export default UserProtectWrapper;
