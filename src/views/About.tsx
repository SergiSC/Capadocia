import React from "react";
import styled, { css } from "styled-components";

import kebab1 from "../assets/images/contact.jpg";
import video from "../assets/videos/about.mov";
import { ImageCarrousel } from "../components/ImageCarrousel";
import { ImageWrapper } from "../components/ImageWrapper";
import { TargetAbout } from "../components/TargetAbout";
import { targetList, TargetListProp } from "../data";

export const StyledSection = styled.section<{ removePadding?: boolean }>`
  padding: ${(props) => (props.removePadding ? "20px 0" : "20px 10%")};

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr minmax(800px, 4fr) 1fr;
    padding: 20px 0;
  }
`;

const TitleBase = css<{ align?: string; margin?: string }>`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  margin-left: ${(props) => (props.margin ? props.margin : 0)};
  text-align: ${(props) => (props.align ? props.align : "start")};

  @media screen and (min-width: 800px) {
    font-size: 2em;
  }
`;

export const TitleL = styled.h1`
  ${TitleBase}
`;

export const TitleM = styled.h3`
  ${TitleBase}
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

const DiferenciamosWrapper = styled.div`
  padding: 20px 10%;
  background-color: var(--color-dark);
  color: var(--color-soft);
  position: relative;
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
    <>
      <StyledSection id={sectionId}>
        <div style={{ gridColumn: 2 }}>
          <TitleM margin={deviceWidth > 800 ? "40%" : "0"}>sobre</TitleM>
          <TitleL margin={deviceWidth > 800 ? "40%" : "0"}>nosotros</TitleL>
          <PText>
            Somos un restaurante de comida tradicional Turca, nos caracterizamos
            por el sabor natural y fresco de la carne, que es preparada cada d??a
            en nuestra cocina.
          </PText>
          <ImageCarrousel width={deviceWidth} />
          <OrigenWrapper>
            <div>
              <TitleM>el</TitleM>
              <TitleL>origen</TitleL>
              <PText>
                El nombre de Capadocia hace referencia a una regi??n tur??stica
                hist??rica de Turqu??a caracterizada por tener unos paisajes
                monta??osos id??licos. <br />
                <br /> Sobrevolar la ciudad en globo aerost??tico es la manera
                m??s espectacular de ver estos paisajes, entre ellos, el espacio
                m??s emblem??tico son ???Las chimeneas de hadas???, una curiosa
                formaci??n geol??gica ??nica en el mundo que consta de unas
                columnas de piedra con terminaciones en forma de hongo.
              </PText>
            </div>
            <ImageWrapper bgImage={kebab1}></ImageWrapper>
          </OrigenWrapper>
        </div>
      </StyledSection>
      <StyledSection removePadding>
        <div style={{ gridColumn: 2 }}>
          <DiferenciamosWrapper>
            <TitleL align="center">nos diferenciamos por...</TitleL>
            <TargetsWrapper>
              {targetList.map((t: TargetListProp, index: number) => (
                <TargetAbout key={index} {...t} />
              ))}
            </TargetsWrapper>
          </DiferenciamosWrapper>
        </div>
      </StyledSection>
      <StyledSection>
        <div style={{ gridColumn: 2 }}>
          <TitleL align="center">con??cenos por dentro</TitleL>
          <StyledVideo autoPlay loop muted>
            <source src={video} type="video/mp4"></source>
          </StyledVideo>
        </div>
      </StyledSection>
    </>
  );
}
