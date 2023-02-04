import "./App.css";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div className="app">
      <div className="brand">
        <h3>Website Dhevz</h3>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          🏘️HOME
        </Link>
        <Link to="/blog" className="nav-item">
          🌐BLOG
        </Link>
        <Link to="/profile" className="nav-item">
          😃PROFILE
        </Link>
        <Link to="/contact" className="nav-item">
          📞CONTACT
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
