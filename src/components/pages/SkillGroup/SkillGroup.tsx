import "./SkillGroup.scss";

import { SkillBubble } from "../SkillBubble";
import { SkillGroupType } from "../../../pages/Skills/Skills.types";

interface SkillGroupProps {
  group: SkillGroupType,
}

const SkillGroup = (props: SkillGroupProps) => {
  const { group } = props;

  return (
    <div className="skillGroup">
      <div className="skillGroupTitle">{group.title}</div>

      <div className="skillBubbles">
        {group.skills.map((skill, index) => <SkillBubble key={index} skill={skill} />)}
      </div>
    </div>
  );
}

export default SkillGroup;
