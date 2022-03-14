import { Outlet, useLocation } from "react-router-dom";
import "./Skills.scss";

import bracket from "../../assets/bracket.png";
import bracketGreen from "../../assets/bracketGreen.png";

const Skills = () => {
  const location = useLocation();

  const isOnHome = location.pathname === '/skills';

  return (
    <div className="skills">
      <img
        className={`bracket bracket__open ${isOnHome ? 'bracket__isOnHome' : ''}`}
        src={bracket}
        alt="open bracket"
      />
      <img
        className={`bracket bracket__close ${isOnHome ? 'bracket__isOnHome' : ''}`}
        src={bracket}
        alt="close bracket"
      />
      <img
        className="animated fallingBubble fallingBubble__1"
        src={bracketGreen}
        alt="close bracket"
      />
      <span className="animated fallingBubble fallingBubble__2" />

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Skills;
