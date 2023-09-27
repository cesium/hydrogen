type CeSIUMLogoProps = {
  width?: number;
  height?: number;
  color?: string;
};

const CeSIUMLogo = (props: CeSIUMLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 479.29 549.18"
      style={{ color: props.color }}
      {...props}
    >
      <defs>
        <style>{`.cls-1{fill: currentColor }`}</style>
      </defs>
      <path
        d="m171.29 39.06 164 94.59-95.05 56.7-82.59-47.53-68 39.06 149.88 86.59 233.41-134.35L239.76 0l-68.47 39.06z"
        className="cls-1"
      />
      <path
        d="M157.41 47.06 7.76 134.24l68.01 39.41 81.64-47.06 82.83 47.06 67.52-39.41-150.35-87.18zM479.29 146.35 246.82 280.47v79.06l232.47-134.12v-79.06zM410.35 288.24v71.29l62.59-35.65-62.59-35.64zM479.29 336.94l-150.11 86.12v78.82l150.11-87.06v-77.88z"
        className="cls-1"
      />
      <path
        d="M246.82 376v173.18l68.47-39.77v-94.59l82.36-47.76v-78.82L246.82 376zM164.24 336.23s1.65 96 0 94.59S0 336.23 0 336.23v78.35l232.94 134.59V375.76Z"
        className="cls-1"
      />
      <path
        d="M68.23 280.94v-95.29L0 146.35V320l150.59 86.35.94-77.41-83.3-48z"
        className="cls-1"
      />
      <path
        d="M82.12 193.65v79.29l150.82 86.59v-78.59L82.12 193.65z"
        className="cls-1"
      />
    </svg>
  );
};

export default CeSIUMLogo;
