import {createBrowserRouter} from "react-router";
import AdminLayout from "./components/layout/AdminLayout.jsx";
import Dashboard from "./pages/Dashboard/page.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            }
        ]
    }
])

export default routes;