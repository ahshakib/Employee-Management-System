import Box from "@mui/material/Box";
// import cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import SideNav from "../components/SideNav.jsx";
import authService from "../services/authService";

const Home = () => {
  const navigate = useNavigate();
  let show = false;

  const gotoSignIn = () => {
    navigate("/signIn");
  };

  useEffect(() => {
    if (!authService.isLogin()) {
      gotoSignIn();
    } else {
      show = true;
    }
  }, []);

  return !show ? null : (
    <>
      <NavBar />
      <Box sx={{ display: "flex", gap: "20px", marginTop: "60px" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Home;
