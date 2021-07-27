import React from "react";
import styled from "styled-components";

import { base } from "@pagerland/common/src/utils";
import { colors } from "../../styles";

const Svg = styled.svg`
  display: block;
  ${base};
`;

const Logo = (props) => (
  <Svg
    width="206"
    height="40"
    viewBox="0 0 206 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.61,7.62337 C24.61,11.8336 18.4636,20.4878 18.4636,20.4878 C18.4636,20.4878 12.3172,11.8336 12.3172,7.62337 C12.3172,3.4131 15.0691,0 18.4636,0 C21.8582,0 24.61,3.4131 24.61,7.62337 Z"
      id="Path"
      fill={colors.brand}
      fill-rule="nonzero"
    ></path>
    <path
      d="M13.3416,34.1917 C13.3416,30.9839 17.9514,24.3902 17.9514,24.3902 C17.9514,24.3902 22.5612,30.9839 22.5612,34.1917 C22.5612,37.3995 20.4974,40 17.9514,40 C15.4055,40 13.3416,37.3995 13.3416,34.1917 Z"
      id="Path"
      fill={colors.brand}
      fill-rule="nonzero"
    ></path>
    <path
      d="M30.8688,21.2307 C27.9875,22.815 19.7521,22.2563 19.7521,22.2563 C19.7521,22.2563 23.3618,15.1846 26.2431,13.6003 C29.1244,12.016 32.4957,12.4398 33.7731,14.5469 C35.0504,16.654 33.7502,19.6464 30.8688,21.2307 Z"
      id="Path"
      fill={colors.brand}
      fill-rule="nonzero"
    ></path>
    <path
      d="M4.38791,25.4871 C7.36357,23.8509 15.8686,24.4279 15.8686,24.4279 C15.8686,24.4279 12.1407,31.7311 9.1651,33.3673 C6.18941,35.0035 2.70776,34.5658 1.38858,32.3897 C0.0694,30.2137 1.41225,27.1233 4.38791,25.4871 Z"
      id="Path"
      fill={colors.brand}
      fill-rule="nonzero"
    ></path>
    <path
      d="M27.4598,34.1339 C24.0816,32.2764 19.8495,23.9852 19.8495,23.9852 C19.8495,23.9852 29.505,23.3302 32.8832,25.1877 C36.2614,27.0452 37.7859,30.5537 36.2883,33.0241 C34.7907,35.4946 30.838,35.9914 27.4598,34.1339 Z"
      id="Path"
      fill={colors.brand}
      fill-rule="nonzero"
    ></path>
    <path
      d="M10.7312,14.2306 C13.2657,15.6242 16.4408,21.8447 16.4408,21.8447 C16.4408,21.8447 9.1968,22.3361 6.66228,20.9425 C4.12779,19.5489 2.98403,16.9167 4.10763,15.0633 C5.23123,13.2098 8.19669,12.837 10.7312,14.2306 Z"
      id="Path"
      fill={colors.brand}
      fill-rule="nonzero"
    ></path>
    <text
      id="beso-homes"
      font-family="AvenirNext-Regular, Avenir Next"
      font-size="24"
      font-weight="normal"
      fill="currentColor"
    >
      <tspan x="47.476" y="30">
        BESO HOMES
      </tspan>
    </text>
  </Svg>
);

export default Logo;
