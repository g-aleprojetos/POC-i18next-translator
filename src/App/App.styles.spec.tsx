import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import * as S from "./App.styles";

describe("App.styles", () => {
  test("Button DEVE ser igual ao snapshot", () => {
    const button = renderer.create(<S.Button />).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('Button DEVE ser igual ao snapshot QUANDO "escolhido" for igual a true', () => {
    const button = renderer.create(<S.Button data-escolhido={true} />).toJSON();
    expect(button).toMatchSnapshot();
  });

  test("Container DEVE ser igual ao snapshot", () => {
    const container = renderer.create(<S.Container />).toJSON();
    expect(container).toMatchSnapshot();
  });

  test("ContainerArticle DEVE ser igual ao snapshot", () => {
    const containerArticle = renderer.create(<S.ContainerArticle />).toJSON();
    expect(containerArticle).toMatchSnapshot();
  });

  test("ContainerButtons DEVE ser igual ao snapshot", () => {
    const containerButtons = renderer.create(<S.ContainerButtons />).toJSON();
    expect(containerButtons).toMatchSnapshot();
  });

  test("Header DEVE ser igual ao snapshot", () => {
    const header = renderer.create(<S.Header />).toJSON();
    expect(header).toMatchSnapshot();
  });

  test("Imagei18Next DEVE ser igual ao snapshot", () => {
    const imagei18Next = renderer.create(<S.Imagei18Next />).toJSON();
    expect(imagei18Next).toMatchSnapshot();
  });

  test("Item DEVE ser igual ao snapshot", () => {
    const item = renderer.create(<S.Item />).toJSON();
    expect(item).toMatchSnapshot();
  });

  test("Nav DEVE ser igual ao snapshot", () => {
    const nav = renderer.create(<S.Nav />).toJSON();
    expect(nav).toMatchSnapshot();
  });

  test("Main DEVE ser igual ao snapshot", () => {
    const main = renderer.create(<S.Main />).toJSON();
    expect(main).toMatchSnapshot();
  });

  test("TextDescription DEVE ser igual ao snapshot", () => {
    const textDescription = renderer.create(<S.TextDescription />).toJSON();
    expect(textDescription).toMatchSnapshot();
  });

  test("Texto DEVE ser igual ao snapshot", () => {
    const texto = renderer.create(<S.TextNav />).toJSON();
    expect(texto).toMatchSnapshot();
  });
});
