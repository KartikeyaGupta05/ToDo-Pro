import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logoutpage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("Logout successful:", response.data);
      localStorage.removeItem("token");
      navigate("/login");
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });

  return <div></div>;
};

export default Logoutpage;
