import { Route, Routes } from "react-router-dom";
import Loadable from './components/Loadable'

const Home = Loadable(() => import('./Pages/Home/Home'))
const Login = Loadable(() => import('./Pages/Login/Login'))
const Signup = Loadable(() => import('./Pages/Login/Signup'))
//const ForgotPassword = Loadable(() => import('./Pages/Login/ForgotPassword'))
const Adminlogin = Loadable(() => import('./Pages/Login/Admin'))
//const Profile = Loadable(() => import('./Pages/Profile/Profile'))
//const Book = Loadable(() => import('./Pages/Book/Book'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
