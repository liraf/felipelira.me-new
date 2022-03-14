import { Link } from "react-router-dom";
import "./CodingSkills.scss";

import { SkillGroup } from "../../../components/pages/SkillGroup";
import { SKILL_GROUPS } from "./constants";
import leftArrow from "../../../assets/left-arrow.svg";

const CodingSkills = () => {
  return (
    <div className="codingSkills">
      <header className="header">
        <Link className="backLink" to="/skills">
          <img className="arrowBack" src={leftArrow} alt="back to skills" />
          <span className="backText">Back</span>
        </Link>

        <h2 className="codingSkillsTitle">Coding skills</h2>
      </header>

      <p className="description">
        As a front-end developer I have experience working with tools since jQuery to modern libraries and frameworks
        like React and Vue.js. On the last 4 years I've been working on projects with these technologies.
      </p>

      <div className="codingSkillsContainer">
        {SKILL_GROUPS.map((group, index) => <SkillGroup key={index} group={group} />)}
      </div>
    </div>
  );
}

export default CodingSkills;
