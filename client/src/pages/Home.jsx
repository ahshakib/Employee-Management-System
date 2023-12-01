import Box from "@mui/material/Box";
// import cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import SideNav from "../components/SideNav.jsx";
import authService from "../services/authService";

const Home = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const gotoSignIn = () => {
    navigate("/signIn");
  };

  useEffect(() => {
    if (!authService.isLogin()) {
      setShow(false)
      gotoSignIn();
    } else {
      setShow(true)
    }
  }, []);

  return !show ? null : (
    <>
      <NavBar />
      <Box sx={{ display: "flex", marginTop: "60px", height: '89.5vh' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: '#e7cffa', width: '80vw' }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Home;
