import { useEffect, useState, useRef } from "react";
import SimplexNoise from 'simplex-noise';
import "./SkillBubble.scss";

import { getInitialPoints, mapToRange, spline } from "./helpers";
import { Point } from "./SkillBubble.types";
import { MIN_NOISE_STEP } from "./constants";

interface SkillBubbleProps {
  skill: string,
}

const SkillBubble = (props: SkillBubbleProps) => {
  const { skill } = props;

  const [points] = useState<Array<Point>>(getInitialPoints());

  /**
   * For the purpose of storing the animate function variables
   * refs work better than normal states.
   * 
   * Here, we need the variable to be updated in real time so it can
   * reflect the user typing action. Also, as we don't need the update
   * to trigger a component rerender we don't need the useState hook.
   */
  const noiseStepRef = useRef<number>(MIN_NOISE_STEP);
  const refBubble = useRef<HTMLDivElement>(null);

  const simplex = new SimplexNoise();

  const noise = (x: number, y: number) => {
    return simplex.noise2D(x, y);
  }

  const animate = () => {
    if (!refBubble?.current) {
      requestAnimationFrame(animate);
      return;
    }

    const paths = Array.from(refBubble.current.querySelectorAll("path"));
    paths.map((path) => path.setAttribute("d", spline(points)));

    points.forEach((point) => {
      const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
      const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
      const x = mapToRange(nX, -1, 1, point.originX - 20, point.originX + 20);
      const y = mapToRange(nY, -1, 1, point.originY - 20, point.originY + 20);

      point.x = x;
      point.y = y;

      point.noiseOffsetX += noiseStepRef?.current;
      point.noiseOffsetY += noiseStepRef?.current;
    });

    requestAnimationFrame(animate);
  }

  useEffect(() => {
    animate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="skillBubble">
      <div className="svgWrapper" ref={refBubble}>
        <svg className="blob" width="214" height="292" viewBox="0 0 214 292">
          <path opacity="0.37"/>
        </svg>
      </div>
      
      <div className="skillName">{skill}</div>
    </div>
  );
}

export default SkillBubble;
