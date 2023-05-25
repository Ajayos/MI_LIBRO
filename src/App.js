import { Route, Routes } from "react-router-dom";
import Loadable from './components/Loadable'
import { makeStyles } from "@mui/styles";

const Home = Loadable(() => import('./Pages/Home/Home'))
const Login = Loadable(() => import('./Pages/Login/Login'))
const Signup = Loadable(() => import('./Pages/Login/Signup'))
//const ForgotPassword = Loadable(() => import('./Pages/Login/ForgotPassword'))
const AdminLogin = Loadable(() => import('./Pages/Login/Admin'))
const Dashboard = Loadable(() => import('./Pages/Dashboard/Dashboard'))
//const Profile = Loadable(() => import('./Pages/Profile/Profile'))
//const Book = Loadable(() => import('./Pages/Book/Book'))
const Password = Loadable(() => import('./Pages/Login/Password'))

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(28, 29, 33)', // Replace with your desired background color
    minHeight: '100vh',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/*<Route path="/profile" element={<Profile />} />*/}
        {/*<Route path="/book/:id" element={<Book />} />*/}
        <Route path="/book" element={<Dashboard />} />
        <Route path="/password" element={<Password />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
