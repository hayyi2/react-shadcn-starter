import { createBrowserRouter } from "react-router-dom";

import Applayout from "./components/layouts/AppLayout";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Empty from "./pages/Empty";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "empty",
                element: <Empty />,
            },
        ],
    },
    {
        path: "*",
        element: <NoMatch />,
    },
])
