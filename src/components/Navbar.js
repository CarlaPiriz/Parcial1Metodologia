import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/dondeEstamos" className="link">
        Donde estamos
      </Link>
      <Link to="/listaProductos" className="link">
        Productos
      </Link>
    </header>
  );
}
