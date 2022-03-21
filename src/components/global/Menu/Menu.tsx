import { NavLink } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  const getClassName = (isActive: boolean) => {
    let className = "routeLink";
    if (isActive) className += " routeLink__active";
    return className;
  }

  return (
    <div className="menu">
      <nav className="routes">
        <NavLink className={navLink => getClassName(navLink.isActive)} to="/">Home</NavLink>
        <NavLink className={navLink => getClassName(navLink.isActive)} to="/skills">Skills</NavLink>
        <NavLink className={navLink => getClassName(navLink.isActive)} to="/portfolio">Portfolio</NavLink>
      </nav>

      <div className="social">
        <a
          className="socialLink"
          href="https://github.com/liraf"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          className="socialLink"
          href="https://www.linkedin.com/in/felipeliraf/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Menu;
