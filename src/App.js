import "./App.css";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">🏘️HOME</Link>
        <Link to="/blog">🌐BLOG</Link>
        <Link to="/profile">😃PROFILE</Link>
        <Link to="/contact">📞CONTACT</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
