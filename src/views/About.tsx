import React from "react";
import styled, { css } from "styled-components";

import kebab1 from "../assets/images/contact.jpg";
import video from "../assets/videos/about.mov";
import { ImageCarrousel } from "../components/ImageCarrousel";
import { ImageWrapper } from "../components/ImageWrapper";
import { TargetAbout } from "../components/TargetAbout";
import { targetList, TargetListProp } from "../data";

const StyledSection = styled.section`
  padding: 20px 10%;
`;

const TitleL = styled.h1<{ centred?: boolean }>`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  text-align: ${(props) => (props.centred ? "center" : "start")};
`;

export const TitleM = styled.h3<{ centred?: boolean }>`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  text-align: ${(props) => (props.centred ? "center" : "start")};
`;

export const PText = styled.p`
  font-weight: 600;
`;

const OrigenWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
`;

const afterBeforeBase = css`
  position: absolute;
  background-color: var(--color-dark);
  height: 100%;
  width: 14%;
  top: 0;
  content: "";
  overflow: hidden;
`;

const DiferenciamosWrapper = styled.div`
  padding: 20px 0;
  background-color: var(--color-dark);
  color: var(--color-soft);
  position: relative;
  margin: 20px 0;
  &:after {
    ${afterBeforeBase}
    left: 99%;
  }

  &:before {
    ${afterBeforeBase}
    right: 99%;
  }
`;

const TargetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  padding: 20px 0;
`;

interface AboutProps {
  sectionId: string;
  deviceWidth: number;
}

export function About({ sectionId, deviceWidth }: AboutProps) {
  return (
    <StyledSection id={sectionId}>
      <TitleM>sobre</TitleM>
      <TitleL>nosotros</TitleL>
      <PText>
        Somos un restaurante de comida tradicional Turca, nos caracterizamos por
        el sabor natural y fresco de la carne, que es preparada cada día en
        nuestra cocina.
      </PText>
      <ImageCarrousel width={deviceWidth} />
      <OrigenWrapper>
        <div>
          <TitleM>el</TitleM>
          <TitleL>origen</TitleL>
          <PText>
            El nombre de Capadocia hace referencia a una región turística
            histórica de Turquía caracterizada por tener unos paisajes
            montañosos idílicos. <br />
            <br /> Sobrevolar la ciudad en globo aerostático es la manera más
            espectacular de ver estos paisajes, entre ellos, el espacio más
            emblemático son “Las chimeneas de hadas”, una curiosa formación
            geológica única en el mundo que consta de unas columnas de piedra
            con terminaciones en forma de hongo.
          </PText>
        </div>
        <ImageWrapper bgImage={kebab1}></ImageWrapper>
      </OrigenWrapper>
      <DiferenciamosWrapper>
        <TitleL centred>nos diferenciamos por...</TitleL>
        <TargetsWrapper>
          {targetList.map((t: TargetListProp, index: number) => (
            <TargetAbout key={index} {...t} />
          ))}
        </TargetsWrapper>
      </DiferenciamosWrapper>
      <TitleL centred>conócenos por dentro</TitleL>
      <StyledVideo controls autoPlay loop muted>
        <source src={video} type="video/mp4"></source>
      </StyledVideo>{" "}
    </StyledSection>
  );
}
