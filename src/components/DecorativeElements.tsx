// Hand-drawn decorative SVG elements

export const Dragonfly = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M50 30C50 30 45 20 40 18C35 16 30 18 28 22C26 26 28 32 33 35C38 38 45 36 50 30Z"
      stroke="#E5F2EC"
      strokeWidth="1.5"
      fill="#E5F2EC"
      opacity="0.6"
    />
    <path
      d="M50 30C50 30 55 20 60 18C65 16 70 18 72 22C74 26 72 32 67 35C62 38 55 36 50 30Z"
      stroke="#E5F2EC"
      strokeWidth="1.5"
      fill="#E5F2EC"
      opacity="0.6"
    />
    <path
      d="M50 40C50 40 45 50 40 52C35 54 30 52 28 48C26 44 28 38 33 35C38 32 45 34 50 40Z"
      stroke="#DDEBF4"
      strokeWidth="1.5"
      fill="#DDEBF4"
      opacity="0.5"
    />
    <path
      d="M50 40C50 40 55 50 60 52C65 54 70 52 72 48C74 44 72 38 67 35C62 32 55 34 50 40Z"
      stroke="#DDEBF4"
      strokeWidth="1.5"
      fill="#DDEBF4"
      opacity="0.5"
    />
    <ellipse cx="50" cy="35" rx="3" ry="20" fill="#0E1E2A" opacity="0.7" />
  </svg>
);

export const Leaf = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 80C20 80 30 40 50 20C70 40 80 80 80 80C80 80 60 85 50 85C40 85 20 80 20 80Z"
      stroke="#E5F2EC"
      strokeWidth="2"
      fill="#E5F2EC"
      opacity="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M50 20C50 20 45 40 40 60"
      stroke="#0E1E2A"
      strokeWidth="1"
      opacity="0.3"
      strokeLinecap="round"
    />
    <path
      d="M50 20C50 20 55 40 60 60"
      stroke="#0E1E2A"
      strokeWidth="1"
      opacity="0.3"
      strokeLinecap="round"
    />
  </svg>
);

export const BrushStroke = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 25Q50 10 100 25T195 25"
      stroke="#F9E7E1"
      strokeWidth="20"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

export const WatercolorBlob = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <ellipse
      cx="100"
      cy="100"
      rx="80"
      ry="90"
      fill="#F9E7E1"
      opacity="0.3"
      transform="rotate(-15 100 100)"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="90"
      ry="70"
      fill="#E5F2EC"
      opacity="0.2"
      transform="rotate(25 100 100)"
    />
  </svg>
);

export const EnsoCircle = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M180 100C180 144.183 144.183 180 100 180C55.8172 180 20 144.183 20 100C20 55.8172 55.8172 20 100 20C120 20 138 27 152 38"
      stroke="#0E1E2A"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);
