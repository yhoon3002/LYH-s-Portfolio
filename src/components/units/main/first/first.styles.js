import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
      rgba(200, 200, 200, 0.5),
      rgba(200, 200, 200, 0.5)
    ),
    url(/images/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  position: absolute;
  z-index: -1;
`;

export const Introduction = styled.div`
  font-family: "Welcome_bold";

  margin: 0px auto;
  padding: 10% 3%;
  text-align: center;
`;

export const Hello = styled.div`
  font-size: 5.2rem;
`;

export const Introudce = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding-top: 1%;
  font-size: 5.2rem;
`;

export const Iam = styled.span`
  padding-right: 20px;
`;

export const Junior = styled.div`
  font-size: 5.2rem;
  padding-top: 1%;
`;
