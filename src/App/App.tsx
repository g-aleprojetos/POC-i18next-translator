import React from "react";
import { useTranslation } from "react-i18next";
import { namespaces } from "../utils/i18n";
import * as S from "./App.styles";

export const App = () => {
  const { t: header, i18n } = useTranslation(namespaces.pages.header);
  const { t: main } = useTranslation(namespaces.pages.main);

  return (
    <S.Container>
      <S.Header>
        <S.Nav>
          <S.Item>
            <S.TextNav>{header("home")}</S.TextNav>
          </S.Item>
          <S.Item>
            <S.TextNav>{header("contents")}</S.TextNav>
          </S.Item>
          <S.Item>
            <S.TextNav>{header("about")}</S.TextNav>
          </S.Item>
        </S.Nav>
      </S.Header>
      <S.Main>
        <S.ContainerButtons>
          <S.Button
            data-escolhido={i18n.resolvedLanguage === "pt"}
            type="submit"
            onClick={() => i18n.changeLanguage("pt")}
          >
            Português
          </S.Button>
          <S.Button
            data-escolhido={i18n.resolvedLanguage === "en"}
            type="submit"
            onClick={() => i18n.changeLanguage("en")}
          >
            English
          </S.Button>
          <S.Button
            data-escolhido={i18n.resolvedLanguage === "fr"}
            type="submit"
            onClick={() => i18n.changeLanguage("fr")}
          >
            Français
          </S.Button>
        </S.ContainerButtons>
        <S.Imagei18Next />
        <S.ContainerArticle>
          <S.TextDescription>{main("description")}</S.TextDescription>
        </S.ContainerArticle>
      </S.Main>
    </S.Container>
  );
};
