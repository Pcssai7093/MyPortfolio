import style from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const p = useLocation();
  return (
    <div className={style.menu}>
      <Link className={p.pathname == "/" ? style.active : ""} to="/">
        Home
      </Link>
      <Link className={p.pathname == "/work" ? style.active : ""} to="/work">
        Work
      </Link>
      <Link
        className={p.pathname == "/contact" ? style.active : ""}
        to="/contact"
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
