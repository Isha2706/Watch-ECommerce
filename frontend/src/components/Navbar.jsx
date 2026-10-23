
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        TIMELESS
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Watches</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>

      <div className="nav-auth">
        <Link to="/login">Login</Link>
        <Link to="/signup" className="signup-link">
          Sign Up
        </Link>
      </div>
    </header>
  );
}
