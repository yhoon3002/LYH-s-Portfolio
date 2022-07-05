import * as S from "./first.styles";
import Typewriter from "typewriter-effect";

export default function FirstPresenter() {
  return (
    <S.Wrapper>
      <S.Background>
        <S.Introduction>
          <S.Hello>안녕하세요.</S.Hello>
          <S.Introudce>
            <S.Iam>저는 </S.Iam>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                cursor: "",
              }}
              onInit={(typewriter) => {
                typewriter
                  // .callFunction(function (state) {
                  //   state.elements.cursor.style.display = "none";
                  // })
                  .typeString("<span>끊임없이 도전하는</span>")
                  .pauseFor(800)
                  .deleteChars(4)
                  .typeString("<span>노력하는</span>")
                  .pauseFor(800)
                  .deleteChars(4)
                  .typeString("<span>고뇌하는</span>")
                  .pauseFor(800)
                  .deleteChars(10)
                  .typeString("<span>열정적인</span>")
                  .pauseFor(800)
                  .deleteChars(4)
                  .typeString("<span>꼼꼼한</span>")
                  .pauseFor(800)
                  .deleteChars(3)
                  .start();
              }}
            />
          </S.Introudce>
          <S.Junior>주니어 개발자입니다.</S.Junior>
        </S.Introduction>
      </S.Background>
    </S.Wrapper>
  );
}
