import React from "react";
import styled from "styled-components";

import kebab1 from "../../assets/images/contact.jpg";
import { ImageCarrousel } from "../../components/ImageCarrousel";

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
      <div>
        <h3>nos diferenciamos por...</h3>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <h3>conócenos por dentro</h3>
      <img src="" alt="" />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding: 20px 10%;
`;

const TitleL = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const TitleM = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const PText = styled.p`
  font-weight: 600;
`;

export const ImageWrapper = styled.div<{ bgImage: string; border?: boolean }>`
  width: 100%;
  min-height: 300px;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px 0;
  border: ${(props) => (props.border ? "solid 1px var(--color-dark)" : "none")};
  border-radius: ${(props) => (props.border ? "5px" : "0")};

  @media screen and (min-width: 800px) {
    margin: 0;
  }
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
