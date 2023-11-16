import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import DashBoard from "../pages/DashBoard.jsx";
import Home from "../pages/Home.jsx";
import Employees from "../pages/Employees.jsx";

export default function AppRoutes() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            children: [
                {
                    path: "dashboard",
                    element: <DashBoard/>
                },
                {
                    path: "employees",
                    element: <Employees/>
                }
            ]
        },
        {
            path: "/signIn",
            element: <SignIn />
        },
        {
            path: "/signUp",
            element: <SignUp />
        }
    ]);
    return <RouterProvider router={routes} />;
}
