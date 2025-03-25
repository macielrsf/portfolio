import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Maciel Rodrigues</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;