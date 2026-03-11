export const PixelArrow = ({
  size = 32,
  arrowColor = "white",
  className = "",
  animationClassName = "",
}) => (
  <span
    className={`flex items-center justify-center rounded-sm ${className}`}
    style={{ width: size, height: size }}
  >
    <svg
      width={size * 0.8}
      height={size * 0.8}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={animationClassName}
      aria-hidden="true"
    >
      <title>Arrow</title>
      <path
        d="M16 13L16 15L18 15L18 13L20 13L20 11L18 11L18 9L16 9L16 11L4 11L4 13L16 13ZM16 9L16 7L14 7L14 9L16 9ZM16 17L16 15L14 15L14 17L16 17ZM12 7L14 7L14 5L12 5L12 7ZM14 19L14 17L12 17L12 19L14 19Z"
        fill={arrowColor}
      />
    </svg>
  </span>
);
