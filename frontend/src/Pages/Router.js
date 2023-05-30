import { Navigate, useRoutes } from "react-router-dom";
import Load from "../components/Load";
import { lazy } from "react";
//  Layout
const Layout = Load(() => import("./Layouts/Layout"));
const Layout_ = Load(() => import("./Layouts/Layout2"));

// 404
const Page404 = Load(() => import("./404"));

// HOME
//import HOME from "./Home";
const UserAccount = Load(() => import("./User/Account"));
const Settings = Load(() => import("./User/Settings"));
const UserBooks = Load(() => import("./User/Books"));

// AUTH
const LoginPage = Load(() => import("./Auth/Login"));
const AdminLoginPage = Load(() => import("./Auth/Admin"));
const ForgotPage = Load(() => import("./Auth/ForgotPssword"));
const CreatePage = Load(() => import("./Auth/CreateAccount"));

// ADMIN DASHBOARD
const DashboardHomePage = Load(() => import("./Dashboard/Dashboard"));
const DashboardUserPage = Load(() => import("./Dashboard/UserPage"));
const DashboardAddBook = Load(() => import("./Dashboard/AddBook"));
const DashboardBooks = Load(() => import("./Dashboard/Books"));

// Router
export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: "home", element: <UserBooks /> },
        { path: "books", element: <UserBooks /> },
        { path: "my-books", element: <div /> },
        { path: "liked-books", element: <div /> },
        { path: "account", element: <UserAccount /> },
        { path: "settings", element: <Settings /> },
      ],
    },
    {
      path: "/dashboard",
      element: <Layout />,
      children: [
        { element: <Navigate to="/dashboard/home" />, index: true },
        { path: "home", element: <DashboardHomePage /> },
        { path: "user", element: <DashboardUserPage /> },
        { path: "books", element: <DashboardBooks /> },
        { path: "addbook", element: <DashboardAddBook /> },
      ],
    },
    { path: "login", element: <LoginPage /> },
    { path: "admin", element: <AdminLoginPage /> },
    { path: "forgot", element: <ForgotPage /> },
    { path: "create", element: <CreatePage /> },
    {
      element: <Layout_ />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
