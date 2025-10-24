import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AdventureDetailItem from "../components/AdventureDetail/AdventureDetailItem";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";
import ShowAdventureDetail from "../components/AdventureDetail/ShowAdventureDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/cardDetails/:id',
        element: <PrivateRoute><AdventureDetailItem /></PrivateRoute>
    },
    {
        path: 'adventureDetails',
        element: <ShowAdventureDetail />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    }
]);

export default router;