import "./SkillsHome.scss";

import { Button } from "../../../components/global/Button";

import lamp from "../../../assets/lamp.svg";
import ruler from "../../../assets/ruler.svg";
import timer from "../../../assets/timer.svg";


const SkillsHome = () => {
  return (
    <div className="skillsHome">
      <h1 className="title">My skills</h1>

      <div className="description">
        I’m <b>Felipe</b>, a 25 year old <b>front-end developer</b> from Brazil.
        <br /><br />
        I'm passionate about writing good and consistent code. I believe that products have the power to positively impact people's lives.
        <br /><br />
        My prefer front-end tools are <b>React</b> and <b>Vue.js</b>.
      </div>

      <div className="softSkills">
        <div className="softSkill">
          <img className="softSkillImg" src={ruler} alt="Pixel-Perfect" />
          <h3 className="softSkillText">Pixel-Perfect</h3>
        </div>
        <div className="softSkill">
          <img className="softSkillImg" src={timer} alt="Fast" />
          <h3 className="softSkillText">Fast</h3>
        </div>
        <div className="softSkill">
          <img className="softSkillImg" src={lamp} alt="Intuitive" />
          <h3 className="softSkillText">Intuitive</h3>
        </div>
      </div>

      <div className="buttonsWrapper">
        <Button className="codingSkillsButton" to="/skills/coding">
          coding skills
        </Button>
      </div>
    </div>
  );
}

export default SkillsHome;
