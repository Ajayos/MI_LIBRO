
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Loadable from '../components/Loadable'


import Navbar from "../components/Navbar/Navbar";
const Home = Loadable(() => import('./Home/Home'))

/**********LOGIN **************/
const Login = Loadable(() => import('./Login/Login'))
const Signup = Loadable(() => import('./Login/Signup'))
const Password = Loadable(() => import('./Login/Password'))
const AdminLogin = Loadable(() => import('./Login/Admin'))

//const ForgotPassword = Loadable(() => import('./Pages/Login/ForgotPassword'))

const Dashboard = Loadable(() => import('./Dashboard/Dashboard'))
const AdminUsers = Loadable(() => import('./Dashboard/users'))

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element:  <Navbar />,
    children: [
      { path: "/login", exact: true, element: <Login /> },
      { path: "/signup", exact: true, element:<Signup /> },
      { path: "/admin", exact: true, element: <AdminLogin /> },
      { path: "/password", exact: true, element: <Password /> },
      { path: "/dashboard", exact: true, element: <Dashboard /> },
      { path: "/dashboard/users", exact: true, element: <AdminUsers /> },
      { path: "/dashboard/manage-books", exact: true, element: <Dashboard /> },
      { path: "/dashboard/add-book", exact: true, element: <Dashboard /> },
      { path: "/dashboard/books", exact: true, element: <Dashboard /> },
      { path: "/dashboard/online-users", exact: true, element: <Dashboard /> },
    ],
  },
];

export default ThemeRoutes;
