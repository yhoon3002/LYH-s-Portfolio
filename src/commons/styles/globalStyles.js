import { css } from "@emotion/react";

export const globalStyles = css`
  html {
    /* 62.5% = 10px */
    font-size: 62.5%;
  }

  @font-face {
    font-family: "Vitro_core";
    src: url(/fonts/Vitro_core.ttf);
  }

  @font-face {
    font-family: "Welcome_bold";
    src: url(/fonts/Welcome_bold.ttf);
  }
`;
