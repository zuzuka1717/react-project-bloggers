import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NaviBar from './Components/NaviBar';
import Home from './Components/Home';
import Users from './Components/Users';
import About from './Components/About';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NaviBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  <Footer />
    </div>
  );
}

export default App;
