import React, { useState } from "react";

const Edit = ({ color = "#999FC0", secondaryColor = "green" }) => {
  const [currentColor, setCurrentColor] = useState(color);
  return (
    <svg
      onMouseOver={() => {
        setCurrentColor(secondaryColor);
      }}
      onMouseOut={() => {
        setCurrentColor(color);
      }}
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_893_7337)">
        <path
          d="M5.8196 1.35775C5.8196 1.67552 5.8196 1.93552 5.8196 2.2533C4.19822 2.2533 2.60579 2.2533 0.955457 2.2533C0.955457 5.51775 0.955457 8.7533 0.955457 12.0177C4.19822 12.0177 7.44098 12.0177 10.7127 12.0177C10.7127 10.4 10.7127 8.81108 10.7127 7.1933C11.0312 7.1933 11.3207 7.1933 11.6392 7.1933C11.6392 7.30886 11.6682 7.39552 11.6682 7.51108C11.6682 8.98441 11.6682 10.4577 11.6682 11.96C11.6682 12.6822 11.3207 13.0289 10.5969 13.0289C7.41203 13.0289 4.25612 13.0289 1.07127 13.0289C0.347439 13 0 12.6533 0 11.9022C0 8.72441 0 5.57552 0 2.39775C0 1.70441 0.347439 1.32886 1.04232 1.32886C2.54788 1.32886 4.05345 1.32886 5.55902 1.32886C5.61693 1.35775 5.70379 1.35775 5.8196 1.35775Z"
          fill={currentColor}
          fill-opacity="0.82"
        />
        <path
          d="M3.73535 8.52217C3.7643 8.46439 3.79326 8.34883 3.82221 8.23328C4.16965 6.73106 4.95139 5.48883 6.10952 4.44883C7.52822 3.17772 8.83112 1.76217 10.1919 0.40439C10.6841 -0.0867206 11.1184 -0.115609 11.6106 0.40439C11.9581 0.751057 12.3345 1.12661 12.6819 1.47328C13.1162 1.90661 13.1162 2.33995 12.6819 2.77328C10.8578 4.62217 9.00484 6.44217 7.15183 8.29106C7.06497 8.37772 6.94916 8.46439 6.83335 8.49328C6.08056 8.75328 5.35673 9.01328 4.60395 9.24439C4.1407 9.38883 3.73535 9.07106 3.73535 8.52217ZM8.97589 2.62883C7.96252 3.63995 6.97811 4.65106 5.9358 5.63328C5.41464 6.12439 5.03825 6.67328 4.86453 7.36661C4.77767 7.74217 4.6329 8.08883 4.48814 8.46439C5.81998 8.1755 6.97811 7.68439 7.7888 6.6155C7.99148 6.3555 8.25206 6.12439 8.48368 5.89328C9.12065 5.28661 9.75762 4.65106 10.3656 4.04439C9.90239 3.55328 9.43914 3.09106 8.97589 2.62883ZM11.1184 3.17772C11.4948 2.80217 11.8712 2.4555 12.2186 2.10883C11.7844 1.6755 11.3211 1.21328 10.9158 0.808835C10.5394 1.1555 10.134 1.53106 9.78658 1.84883C10.2498 2.31106 10.7131 2.77328 11.1184 3.17772Z"
          fill={currentColor}
          fill-opacity="0.82"
        />
      </g>
      <defs>
        <clipPath id="clip0_893_7337">
          <rect width="13" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Edit;