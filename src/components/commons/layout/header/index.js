import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
`;

export default function Header() {
  return (
    <>
      <div>{"LYH's Portfolio"}</div>
      <div>About Me</div>
      <div>Archiving</div>
      <div>Projects</div>
    </>
  );
}
