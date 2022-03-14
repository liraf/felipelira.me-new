/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { Point } from "./SkillBubble.types";

/**
 * Returns the initial points. Each point has a random noise offset.
 * 
 * @returns initialPoints
 */
export const getInitialPoints = (): Array<Point> => {
  const points = [];
  const numPoints = 6;
  const angleStep = (Math.PI * 2) / numPoints;
  const rad = 75;

  for (let i = 1; i <= numPoints; i++) {
    const theta = i * angleStep;

    const x = 100 + Math.cos(theta) * rad;
    const y = 100 + Math.sin(theta) * rad;

    points.push({
      x: x,
      y: y,
      originX: x,
      originY: y,
      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000
    });
  }

  return points;
}

/**
 * Takes a n value in a specific range and
 * returns the corresponding value in a destinated range.
 * 
 * @param n 
 * @param start1 
 * @param end1 
 * @param start2 
 * @param end2 
 * 
 * @returns mappedValue
 */
export const mapToRange = (
  n: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number,
): number => {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

/**
 * @see https://github.com/georgedoescode/splinejs/blob/main/spline.js
 */
const formatPoints = (points: Array<Point>): Array<number> => {
  const formatedPoints = points.map(({ x, y }) => [x, y]);

  const lastPoint = formatedPoints[formatedPoints.length - 1];
  const secondToLastPoint = formatedPoints[formatedPoints.length - 2];

  const firstPoint = formatedPoints[0];
  const secondPoint = formatedPoints[1];

  formatedPoints.unshift(lastPoint);
  formatedPoints.unshift(secondToLastPoint);

  formatedPoints.push(firstPoint);
  formatedPoints.push(secondPoint);

  return formatedPoints.flat();
}

/**
 * Gets an array of points coordinates and returns
 * the designated path to create an SVG with the points
 * 
 * Modified and extracted from splinejs
 * 
 * @see https://github.com/georgedoescode/splinejs/blob/main/spline.js
 */
export const spline = (points: Array<Point>) => {
  const tension = 1;

  const formatedPoints = formatPoints(points);

  const size = formatedPoints.length;
  const last = size - 4;

  const startPointX = formatedPoints[2];
  const startPointY = formatedPoints[3];

  let path = "M" + [startPointX, startPointY];

  const startIteration = 2;
  const maxIteration = size - 4;
  const inc = 2;

  for (let i = startIteration; i < maxIteration; i += inc) {
    const x0 = i ? formatedPoints[i - 2] : formatedPoints[0];
    const y0 = i ? formatedPoints[i - 1] : formatedPoints[1];

    const x1 = formatedPoints[i + 0];
    const y1 = formatedPoints[i + 1];

    const x2 = formatedPoints[i + 2];
    const y2 = formatedPoints[i + 3];

    const x3 = i !== last ? formatedPoints[i + 4] : x2;
    const y3 = i !== last ? formatedPoints[i + 5] : y2;

    const cp1x = x1 + ((x2 - x0) / 6) * tension;
    const cp1y = y1 + ((y2 - y0) / 6) * tension;

    const cp2x = x2 - ((x3 - x1) / 6) * tension;
    const cp2y = y2 - ((y3 - y1) / 6) * tension;

    path += "C" + [cp1x, cp1y, cp2x, cp2y, x2, y2];
  }

  return path;
}
