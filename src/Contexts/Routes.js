import Archive from "../Pages/Archive";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Bin from "../Pages/Bin";
import Home from "../Pages/Home";
import Notes from "../Pages/Notes";
import Search from "../Pages/Search";
import Tasks from "../Pages/Tasks";


export const AuthenticationRoutes = [
    {
        id: 1,
        name: "Login",
        component: Login,
        path: "/",
    },
    {
        id: 2,
        name: "SignUp",
        component: SignUp,
        path: "/signup",
    },
];

export const AuthenticatedRoutes = {
    id:1,
    name: "Application",
    path: "/app",
    children: [
        {
            id:4,
            name: "Home",
            component: Home,
            path: "/app/home",
        },
        {
            id:5,
            name: "Search",
            component: Search,
            path: "/app/search",
        },
        {
            id:6,
            name: "Notes",
            component: Notes,
            path: "/app/notes",
        },
        {
            id:7,
            name: "Tasks",
            component: Tasks,
            path: "/app/tasks",
        },
        {
            id:8,
            name: "Archive",
            component: Archive,
            path: "/app/archive",
        },
        {
            id:9,
            name: "Bin",
            component: Bin,
            path: "/app/bin",
        }

    ]

};