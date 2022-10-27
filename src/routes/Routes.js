import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import CoursesDetails from "../components/CoursesDetails";
import ErrorPage from "../components/ErrorPage";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Login from "../components/Login";
import Premium from "../components/Premium";
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
                    fetch("https://learn-with-programming-server.vercel.app"),
                element: <Courses></Courses>,
            },
            {
                path: "/courses/:id",
                loader: async ({ params }) =>
                    fetch(
                        `https://learn-with-programming-server.vercel.app/${params.id}`,
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
                path: '/premium',
                element: <Premium></Premium>
            }
        ]
    }
])

export default router