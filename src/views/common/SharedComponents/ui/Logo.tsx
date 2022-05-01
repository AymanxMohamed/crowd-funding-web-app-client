import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex-shrink-0 mr-4">
      <Link to="/" className="block" aria-label="Cruip">
        <svg
          className="w-8 h-8"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="21.152%"
              cy="86.063%"
              fx="21.152%"
              fy="86.063%"
              r="79.941%"
              id="header-logo"
            >
              <stop stopColor="#4FD1C5" offset="0%" />
              <stop stopColor="#81E6D9" offset="25.871%" />
              <stop stopColor="#338CF5" offset="100%" />
            </radialGradient>
          </defs>
          <rect
            width="32"
            height="32"
            rx="16"
            fill="url(#header-logo)"
            fillRule="nonzero"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Logo;