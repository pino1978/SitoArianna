import type { SVGProps } from 'react';

export type LetteringSvgProps = SVGProps<SVGSVGElement> & {
  color?: string;
  shadowColor?: string;
  highlightColor?: string;
  title?: string;
};

type BrushStroke = {
  d: string;
  opacity?: number;
};

type BrushCut = {
  d: string;
  opacity?: number;
};

type BrushFlick = {
  d: string;
  strokeWidth?: number;
  opacity?: number;
};

type BrushWordmarkProps = LetteringSvgProps & {
  viewBox: string;
  strokes: BrushStroke[];
  cuts?: BrushCut[];
  flicks?: BrushFlick[];
};

export function BrushWordmark({
  viewBox,
  strokes,
  cuts = [],
  flicks = [],
  className = '',
  color = '#C9A962',
  shadowColor = '#5C3B13',
  highlightColor = '#F0D184',
  title = 'Brush lettering',
  ...svgProps
}: BrushWordmarkProps) {
  const labelled = Boolean(svgProps['aria-label']);
  const titleId = labelled ? undefined : `${title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-title`;

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={labelled ? 'img' : undefined}
      aria-hidden={labelled ? undefined : true}
      aria-labelledby={titleId}
      {...svgProps}
    >
      {titleId && <title id={titleId}>{title}</title>}
      <g transform="translate(4 5)" fill={shadowColor} opacity="0.58">
        {strokes.map((stroke, index) => (
          <path key={`shadow-${index}`} d={stroke.d} opacity={stroke.opacity ?? 1} />
        ))}
      </g>
      <g fill={color}>
        {strokes.map((stroke, index) => (
          <path key={`stroke-${index}`} d={stroke.d} opacity={stroke.opacity ?? 1} />
        ))}
      </g>
      <g fill={highlightColor} opacity="0.34">
        {strokes.map((stroke, index) => (
          <path
            key={`highlight-${index}`}
            d={stroke.d}
            opacity={(stroke.opacity ?? 1) * 0.75}
            transform="translate(-1.8 -2.4) scale(0.985 0.965)"
          />
        ))}
      </g>
      <g fill="#080808">
        {cuts.map((cut, index) => (
          <path key={`cut-${index}`} d={cut.d} opacity={cut.opacity ?? 0.82} />
        ))}
      </g>
      <g fill="none" stroke={highlightColor} strokeLinecap="round" strokeLinejoin="round">
        {flicks.map((flick, index) => (
          <path
            key={`flick-${index}`}
            d={flick.d}
            strokeWidth={flick.strokeWidth ?? 2.4}
            opacity={flick.opacity ?? 0.55}
          />
        ))}
      </g>
    </svg>
  );
}
