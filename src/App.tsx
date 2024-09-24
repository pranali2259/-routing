import Home from './Home';
import About from './About';
import Logout from './Logout';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>{' '}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Logout">logout</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
