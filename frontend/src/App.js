import { Route, Routes } from "react-router-dom";
import Loadable from './components/Loadable'
import { makeStyles } from "@mui/styles";
import Navbar from "./components/Navbar/Navbar";


const Home = Loadable(() => import('./Pages/Home/Home'))
const Login = Loadable(() => import('./Pages/Login/Login'))
const Signup = Loadable(() => import('./Pages/Login/Signup'))
const AdminLogin = Loadable(() => import('./Pages/Login/Admin'))
const Password = Loadable(() => import('./Pages/Login/Password'))


const Dashboard = Loadable(() => import('./Pages/Dashboard/Dashboard'))
const DashboardUsers = Loadable(() => import('./Pages/Dashboard/users'))
const DashboardBooks = Loadable(() => import('./Pages/Dashboard/books'))
const DashboardAddBook = Loadable(() => import('./Pages/Dashboard/addBook'))
const DashboardBlockedUser = Loadable(() => import('./Pages/Dashboard/blockedUser'))
const DashboardInformations = Loadable(() => import('./Pages/Dashboard/informations'))
const DashboardManageBooks = Loadable(() => import('./Pages/Dashboard/manageBooks'))
const DashboardOnlineUsers = Loadable(() => import('./Pages/Dashboard/onlineUsers'))


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/password" element={<Password />} />


        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/users" element={<DashboardUsers />} />
        <Route path="/dashboard/books" element={<DashboardBooks />} />
        <Route path="/dashboard/add-book" element={<DashboardAddBook />} />
        <Route path="/dashboard/blocked-users" element={<DashboardBlockedUser />} />
        <Route path="/dashboard/informations" element={<DashboardInformations />} />
        <Route path="/dashboard/manage-books" element={<DashboardManageBooks />} />
        <Route path="/dashboard/online-users" element={<DashboardOnlineUsers />} />



        <Route path="/book" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
