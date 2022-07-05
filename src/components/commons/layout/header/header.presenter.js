import * as S from "./header.styles";

export default function HeaderPresenter() {
  return (
    <S.Wrapper>
      <S.Logo>{"LYH's Portfolio"}</S.Logo>
      <S.Navigation>
        <S.AboutMe>About Me</S.AboutMe>
        <S.Skills>Skills</S.Skills>
        <S.Archiving>Archiving</S.Archiving>
        <S.Projects>Projects</S.Projects>
      </S.Navigation>
    </S.Wrapper>
  );
}
