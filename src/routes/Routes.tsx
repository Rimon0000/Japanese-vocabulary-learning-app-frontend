
import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        
    ]
  },

]);

export default router;