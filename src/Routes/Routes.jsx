import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AdventureDetailItem from "../components/AdventureDetail/AdventureDetailItem";

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
        element: <AdventureDetailItem />
    }
]);

export default router;