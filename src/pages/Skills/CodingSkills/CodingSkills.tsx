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

      <div className="codingSkillsContainer">
        <p className="description">As a Front-End developer Lorem ipsum dolor sit ametAs a Front-End developer Lorem ipsum dolor sit ametAs a Front-End developer Lorem ipsum dolor sit amet.</p>

        <div className="skillsContainer">
          {SKILL_GROUPS.map((group) => <SkillGroup group={group} />)}
        </div>
      </div>
    </div>
  );
}

export default CodingSkills;
