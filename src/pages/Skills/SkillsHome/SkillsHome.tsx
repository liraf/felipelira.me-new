import "./SkillsHome.scss";

import { Button } from "../../../components/global/Button";

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

      <div className="buttonsWrapper">
        <Button className="codingSkillsButton" to="/skills/coding">
          coding skills
        </Button>
      </div>
    </div>
  );
}

export default SkillsHome;
