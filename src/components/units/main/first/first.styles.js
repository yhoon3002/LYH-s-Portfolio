import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  position: absolute;
  z-index: -1;
`;

export const Background = styled.div`
  width: 100%;
  height: 500px;

  background-image: url(/images/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`;
