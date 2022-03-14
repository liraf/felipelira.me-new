import { Outlet } from "react-router-dom";

import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Skills;
