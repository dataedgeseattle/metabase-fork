import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { PLUGIN_LOGO_ICON_COMPONENTS } from "metabase/plugins";

class DefaultLogoIcon extends Component {
  static defaultProps = {
    height: 32,
  };
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    const { dark, height, width } = this.props;
    return (

      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
       width="50.000000pt" height="50.000000pt" viewBox="0 0 128.000000 128.000000"
       preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M181 1239 c-116 -84 -104 -242 23 -299 l39 -18 -39 -22 c-21 -11 -56
      -32 -78 -44 l-39 -24 28 -18 c43 -28 127 -31 171 -5 21 13 34 16 31 9 -3 -7
      -19 -49 -37 -92 l-32 -80 23 -18 c119 -93 168 -152 200 -244 19 -54 19 -54 -2
      -97 -26 -50 -29 -129 -6 -172 33 -64 112 -115 177 -115 65 0 144 51 177 115
      23 43 20 122 -6 172 -21 43 -21 43 -2 97 32 92 81 151 200 244 l23 18 -32 80
      c-18 43 -34 85 -37 92 -3 7 10 4 31 -9 44 -26 128 -23 171 5 l28 18 -39 24
      c-22 12 -57 33 -78 44 l-39 22 39 18 c144 65 137 239 -13 324 -7 4 -4 -11 7
      -36 22 -48 26 -109 9 -140 -16 -30 -86 -58 -150 -58 -56 0 -66 4 -204 78 -51
      29 -119 29 -170 0 -138 -74 -148 -78 -204 -78 -64 0 -134 28 -150 58 -17 31
      -13 92 9 140 10 23 18 42 16 42 -2 0 -22 -14 -45 -31z m311 -563 c26 -17 48
      -34 48 -37 0 -4 -13 -12 -30 -19 -57 -24 -120 26 -120 96 l0 26 28 -18 c15 -9
      48 -31 74 -48z m384 -14 c-21 -40 -66 -58 -106 -42 -16 7 -30 15 -30 19 0 3
      33 27 73 53 71 47 72 47 75 24 2 -14 -4 -38 -12 -54z m-236 -457 c30 0 65 4
      78 8 18 7 22 5 22 -13 0 -29 -26 -77 -49 -90 -25 -13 -77 -13 -102 0 -23 13
      -49 61 -49 90 0 18 4 20 23 13 12 -4 47 -8 77 -8z"/>
      </g>
      </svg>

    );
  }
}

export default function LogoIcon(props) {
  const [Component = DefaultLogoIcon] = PLUGIN_LOGO_ICON_COMPONENTS;
  return <Component {...props} />;
}
