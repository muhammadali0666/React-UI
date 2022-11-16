import { NavLink } from "react-router-dom";
import Logo from "../../Assets/img/logo.png";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <NavLink to="/hero">
          <img src={Logo} alt="logo" className="header-logo" />
          </NavLink>
          <ul className="header-list list-unstyled">
            <li className="header-item">
              <NavLink
                to="/team"
                className="header-item-link text-decoration-none"
              >
                Beranda
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink
                to="/progress"
                className="header-item-link text-decoration-none"
              >
                Koleksi
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink
                to="/card"
                className="header-item-link text-decoration-none"
              >
                Syarattan ketan tuan
              </NavLink>
            </li>
            <li className="header-item">
              <NavLink
                to="/slider"
                className="header-item-link text-decoration-none"
              >
                Kontak
              </NavLink>
            </li>
          </ul>
          <button className="header-btn">
          <NavLink
          className="text-white text-decoration-none"
                to="/social"
              >
                Masuk
              </NavLink>
          </button>
        </div>
      </div>
    </header>
  );
};
