import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0px auto;
`;

export const Logo = styled.div`
  font-family: "Vitro_core";
  font-size: 3.2rem;
  font-weight: 700;

  background-color: red;

  cursor: pointer;

  margin-left: 200px;
  margin-right: auto;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;

  font-family: "Vitro_core";
  font-size: 1.8rem;
  font-weight: 500;

  margin-right: 230px;
`;

export const AboutMe = styled.div`
  background-color: orange;

  cursor: pointer;

  margin-right: 35px;
`;

export const Skills = styled.div`
  background-color: yellow;

  cursor: pointer;

  margin-right: 35px;
`;

export const Archiving = styled.div`
  background-color: green;

  cursor: pointer;

  margin-right: 35px;
`;

export const Projects = styled.div`
  background-color: blue;

  cursor: pointer;
`;
