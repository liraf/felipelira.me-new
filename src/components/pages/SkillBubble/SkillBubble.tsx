import "./SkillBubble.scss";

interface SkillBubbleProps {
  skill: string,
}

const SkillBubble = (props: SkillBubbleProps) => {
  const { skill } = props;

  return (
    <div className="skillBubble">
      {skill}
    </div>
  );
}

export default SkillBubble;
