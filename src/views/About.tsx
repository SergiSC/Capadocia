import React from "react";
import styled, { css } from "styled-components";

import kebab1 from "../assets/images/about.jpg";
import video from "../assets/videos/about.mov";
import { ImageCarrousel } from "../components/ImageCarrousel";
import { ImageWrapper } from "../components/ImageWrapper";
import { TargetAbout } from "../components/TargetAbout";
import { targetList, TargetListProp } from "../data";

export const StyledSection = styled.section<{ removePadding?: boolean }>`
  padding: ${(props) => (props.removePadding ? "80px 0 0" : "80px 10% 0")};

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr minmax(800px, 4fr) 1fr;
    padding: 100px 0 0 0;
    ${(props) =>
      props.removePadding &&
      css`
        grid-template-columns: 1fr;
      `}
  }
`;

const Section = styled(StyledSection)`
  padding-top: 0;
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
  @media screen and (min-width: 800px) {
    font-size: 2em;
    text-align: center;
  }
`;

const OrigenWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    margin: 20px 0 50px;
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
  padding: 20px 20px;
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
`;

const ImgWrap = styled(ImageWrapper)`
  height: 100%;
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
            por el sabor natural <br /> y fresco de la carne, que es preparada
            cada día en nuestra cocina.
          </PText>
          <ImageCarrousel width={deviceWidth} />
          <TitleM>el</TitleM>
          <TitleL>origen</TitleL>
          <OrigenWrapper>
            <PText>
              El nombre de Capadocia hace referencia a una región turística
              histórica de Turquía caracterizada por tener unos{" "}
              <strong>paisajes montañosos idílicos</strong>. <br />
              <br /> Sobrevolar la ciudad en globo aerostático es la manera más
              espectacular de ver estos paisajes, entre ellos, el espacio más
              emblemático son “Las chimeneas de hadas”, una curiosa formación
              geológica única en el mundo que consta de unas columnas de piedra
              con terminaciones en forma de hongo.
            </PText>
            <ImgWrap bgImage={kebab1}></ImgWrap>
          </OrigenWrapper>
        </div>
      </StyledSection>
      <Section id={sectionId} removePadding>
        <DiferenciamosWrapper>
          <TitleL align="center">nos diferenciamos por...</TitleL>
          <TargetsWrapper>
            {targetList.map((t: TargetListProp, index: number) => (
              <TargetAbout key={index} {...t} />
            ))}
          </TargetsWrapper>
        </DiferenciamosWrapper>
      </Section>
      <Section id={sectionId}>
        <div style={{ gridColumn: 2, paddingTop: 20 }}>
          <TitleL align="center">conócenos por dentro</TitleL>
          <StyledVideo autoPlay loop muted>
            <source src={video} type="video/mp4"></source>
          </StyledVideo>
        </div>
      </Section>
    </>
  );
}
