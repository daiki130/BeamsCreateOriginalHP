import styled from "styled-components";
import Image from "next/image";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledFooterLogo>
          <Image src="/BEAMSLogo.png" width={200} height={34} alt="BEAMSロゴ" />
        </StyledFooterLogo>
        <StyledFooterList>
          <ul>
            <li>
              <a href="#">サイトマップ</a>
            </li>
            <li>
              <a href="#">プライバシーポリシー</a>
            </li>
            <li>
              <a href="#">サイトご利用規約</a>
            </li>
            <li>
              <a href="#">お問い合わせ</a>
            </li>
            <li>
              <a href="#">BEAMS公式ショップ</a>
            </li>
          </ul>
        </StyledFooterList>
        <StyledFooterIcons>
          <StyledFooterIconsContainer>
            <StyledFooterIconsUl>
              {/* <li className="fa-facebook-squareFacebook">
                <a href="#"></a>
                <span
                  className="fab fa-facebook-square"
                  style={{ lineHeight: "40px", width: "100%" }}
                ></span>
              </li>
              <li className="fa-cameraCamera">
                <a href="#"></a>
                <span
                  className="fab fas fa-camera"
                  style={{ lineHeight: "40px", width: "100%" }}
                ></span>
              </li>
              <li className="fa-twitterTwitter">
                <a href="#"></a>
                <span
                  className="fab fa-twitter"
                  style={{ lineHeight: "40px", width: "100%" }}
                ></span>
              </li>
              <li className="fa-envelopeEnvelope">
                <a href="#"></a>
                <span
                  className="fab fas fa-envelope"
                  style={{ lineHeight: "40px", width: "100%" }}
                ></span>
              </li>
              <li className="fa-youtubeYoutube">
                <a href="#"></a>
                <span
                  className="fab fab fa-youtube"
                  style={{ lineHeight: "40px", width: "100%" }}
                ></span>
              </li> */}
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
  &.fa-facebook-squareFacebook {
    width: 40px;
    height: 40px;
    background-color: royalblue;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    position: relative;
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
      background: white;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
    &:hover {
      &::before {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
    }
    & .fa-facebook-square {
      &:hover {
        color: white;
      }
    }
  }
  &.fa-cameraCamera {
    width: 40px;
    height: 40px;
    background-color: rgb(214, 36, 170);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    position: relative;
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
      background: white;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
    &:hover {
      &::before {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
    }
    & .fa-camera {
      &:hover {
        color: #fff;
      }
    }
  }
  &.fa-twitterTwitter {
    width: 40px;
    height: 40px;
    background-color: rgba(0, 172, 237, 1);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    position: relative;
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
      background: white;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
    &:hover {
      &::before {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
    }
    & .fa-twitter {
      &:hover {
        color: white;
      }
    }
  }
  &.fa-envelopeEnvelope {
    width: 40px;
    height: 40px;
    background-color: rgb(57, 184, 46);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    position: relative;
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
      background: white;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
    &:hover {
      &::before {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
    }
    & .fa-envelope {
      &:hover {
        color: #fff;
      }
    }
  }
  &.fa-youtubeYoutube {
    width: 40px;
    height: 40px;
    background-color: rgb(233, 56, 56);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    position: relative;
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
      background: white;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
    &:hover {
      &::before {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
    }
    & .fa-youtube {
      &:hover {
        color: white;
      }
    }
  }
  & span {
    position: absolute;
    top: 0;
    left: 0;
    color: black;
  }
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
