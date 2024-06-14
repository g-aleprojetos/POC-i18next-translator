import styled from "styled-components";
import Imagei18NextSVG from "../assets/images/i18next.svg";

export interface IApp {
  "data-escolhido"?: boolean;
}

export const Button = styled.button<IApp>`
  width: 100px;
  height: 30px;
  margin: 10px;
  background-color: ${(props) => (props["data-escolhido"] ? "#aff" : "#aaa")};
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerArticle = styled.article`
  display: flex;
  padding: 10px 100px;
`;

export const ContainerButtons = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #202024;
`;

export const Imagei18Next = styled.img.attrs({
  src: Imagei18NextSVG,
  alt: "i18Next",
})`
  width: 240px;
  height: 120px;
`;

export const Item = styled.a`
  margin: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  margin-right: 100px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextDescription = styled.p`
  font-size: 20px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 10px;
  text-align: justify;
`;

export const TextNav = styled.p`
  font-size: 15px;
  color: #fff;
  cursor: pointer;
`;
