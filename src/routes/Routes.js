import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import CoursesDetails from "../components/CoursesDetails";
import ErrorPage from "../components/ErrorPage";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Login from "../components/Login";
import Checkout from "../components/Checkout";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: "/courses",
                loader: async () =>
                    fetch("https://learn-with-programming-server.vercel.app/categories"),
                element: <Courses></Courses>,
            },
            {
                path: "/courses/:id",
                loader: async ({ params }) =>
                    fetch(
                        `https://learn-with-programming-server.vercel.app/categories/${params.id}`,
                    ),
                element: <CoursesDetails></CoursesDetails>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            }
        ]
    }
])

export default router