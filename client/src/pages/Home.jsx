import SideNav from "../components/SideNav.jsx";
import {Outlet} from "react-router-dom";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar.jsx"

const Home = () => {
    return (
        <>
            <NavBar/>
            <Box sx={{display:"flex", gap:"20px", marginTop:"60px"}}>
                <SideNav/>
                <Outlet/>
            </Box>
        </>
    )
}

export default Home;