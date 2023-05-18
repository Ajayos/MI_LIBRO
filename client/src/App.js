import { Route, Routes } from "react-router-dom";
import Loadable from './components/Loadable'

const Home = Loadable(() => import('./Pages/Home/Home'))
const AuthControl = Loadable(() => import('./Pages/Home/AuthControl'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<AuthControl />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
