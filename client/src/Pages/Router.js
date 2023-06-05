import { Navigate, useRoutes } from "react-router-dom";
import Load from "../components/Load";
import { useAuth } from "../contexts/AuthContext";

// Layouts
const Layout = Load(() => import("./Layouts/Layout"));
const Layout_ = Load(() => import("./Layouts/Layout2"));

// 404
const Page404 = Load(() => import("./404"));

// 500
const Page500 = Load(() => import("./500"));

// AUTH
const LoginPage = Load(() => import("./Auth/Login"));
const AdminLoginPage = Load(() => import("./Auth/Admin"));
const ForgotPage = Load(() => import("./Auth/ForgotPassword"));
const CreatePage = Load(() => import("./Auth/CreateAccount"));

// USER PAGES
const UserAccount = Load(() => import("./User/Account"));
const Settings = Load(() => import("./User/Settings"));
const UserBooks = Load(() => import("./User/Books"));
const UserHome = Load(() => import("./User/Home"));
const UserBook = Load(() => import("./User/Book"));
const LikedBooks = Load(() => import("./User/LikedBooks"));
const UserMyBooks = Load(() => import("./User/UserBooks"));

// ADMIN PAGES
const DashboardHomePage = Load(() => import("./Dashboard/Dashboard"));
const DashboardUserPage = Load(() => import("./Dashboard/UserPage"));
const DashboardAddBook = Load(() => import("./Dashboard/AddBook"));
const DashboardBooks = Load(() => import("./Dashboard/Books"));
const DashboardEditBook = Load(() => import("./Dashboard/EditBook"));
const DashboardReqBooks = Load(() => import("./Dashboard/RequestedBooks"));

export default function Router() {
  const { isAuthenticated, access } = useAuth();

  const routes = useRoutes([
    { path: "login", element: <LoginPage /> },
    { path: "admin", element: <AdminLoginPage /> },
    { path: "forgot", element: <ForgotPage /> },
    { path: "create", element: <CreatePage /> },
    ...(isAuthenticated && !access
      ? [
          {
            path: "/",
            element: <Layout />,
            children: [
              { element: <Navigate to="/home" />, index: true },
              { path: "home", element: <UserHome /> },
              { path: "books", element: <UserBooks /> },
              { path: "book/:id", element: <UserBook /> },
              { path: "my-books", element: <UserMyBooks /> },
              { path: "liked-books", element: <LikedBooks /> },
              { path: "account", element: <UserAccount /> },
              { path: "settings", element: <Settings /> },
            ],
          },
        ]
      : []),
    ...(isAuthenticated && access
      ? [
          {
            path: "/",
            element: <Layout />,
            children: [
              { element: <Navigate to="/home" />, index: true },
              { path: "home", element: <DashboardHomePage /> },
              { path: "user", element: <DashboardUserPage /> },
              { path: "books", element: <DashboardBooks /> },
              { path: "addbook", element: <DashboardAddBook /> },
              { path: "req-books", element: <DashboardReqBooks /> },
              { path: "editbook/:id", element: <DashboardEditBook />}
            ],
          },
        ]
      : []),
    {
      path: "/500",
      element: <Layout_ />,
      children: [{ element: <Page500 />, index: true }],
    },
    {
      element: <Layout_ />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Page404 /> },
      ],
    },
  ]);

  return routes;
}
