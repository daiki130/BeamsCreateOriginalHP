import styled from "styled-components";
import Image from "next/image";
import { IconButtons } from "./IconButtons";

export const Footer = () => {
  const footerLists = [
    "サイトマップ",
    "プライバシーポリシー",
    "サイトご利用規約",
    "お問い合わせ",
    "BEAMS公式ショップ",
  ];
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledFooterLogo>
          <Image src="/BEAMSLogo.png" width={200} height={34} alt="BEAMSロゴ" />
        </StyledFooterLogo>
        <StyledFooterList>
          <ul>
            {footerLists.map((list, index) => (
              <li key={index}>
                <a href="#">{list}</a>
              </li>
            ))}
          </ul>
        </StyledFooterList>
        <StyledFooterIcons>
          <StyledFooterIconsContainer>
            <StyledFooterIconsUl>
              <IconButtons />
            </StyledFooterIconsUl>
            <StyledButtonContainer>
              <StyledButton>English</StyledButton>
            </StyledButtonContainer>
          </StyledFooterIconsContainer>
        </StyledFooterIcons>
        <StyledSmall>
          <span>&BEAMS Co., Ltd.</span>
        </StyledSmall>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: black;
  height: 400px;
  position: relative;
  top: 0;
  cursor: pointer;
`;
const StyledFooterContainer = styled.div`
  width: 600px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const StyledFooterLogo = styled.div`
  padding: 80px 0 40px;
`;
const StyledFooterList = styled.div`
  & ul {
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: space-around;
    & li {
      & a {
        font-size: 12px;
        color: #fff;
      }
    }
  }
`;
const StyledFooterIcons = styled.div`
  display: flex;
`;
const StyledFooterIconsContainer = styled.div`
  width: 100%;
  display: flex;
`;
const StyledFooterIconsUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 50%;
  justify-content: space-around;
  padding: 30px 0;
  margin-left: auto;
`;
const StyledButtonContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
`;
const StyledButton = styled.button`
  height: 41px;
  margin-left: 20px;
  border-radius: 50px;
  width: 96px;
  font-size: 15px;
  font-family: "CA Sans", YuGothic, "ヒラギノ角ゴ ProN W3", "Lucida Grande",
    "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, Verdana, "ＭＳ Ｐゴシック",
    sans-serif;
  font-weight: bold;
  color: white;
  background-color: white;
  border: 2px solid white;
  position: relative;
  overflow: hidden;
  /* 文字表示させる */
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    border-radius: 50px;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  &:hover {
    color: black;
    &::before {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }
`;
const StyledSmall = styled.small`
  color: #fff;
`;
