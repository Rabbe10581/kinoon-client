import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Categories from "../../Pages/Categories/Categories";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                // loader: () => fetch('skills.json'),
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/categories',
                loader: () => fetch('categories.json'),
                element: <Categories></Categories>,
            },
        ]
    }
])
export default router;