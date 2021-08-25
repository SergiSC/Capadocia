import React from "react";
import styled, { keyframes } from "styled-components";
import { TitleL, TitleM } from "./About";
import bgImage from "../assets/images/bg-kebab.jpg";

const HomeSection = styled.section`
  position: relative;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  padding: 0 10%;
  font-size: 16pt;
  height: 100vh;
  color: var(--color-dark);

  :before {
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr minmax(800px, 6fr) 1fr;
    padding: 0;
  }

  @media screen and (max-width: 350px) {
    font-size: 12pt;
  }
`;

const HomeWrapper = styled.div`
  @media screen and (min-width: 800px) {
    grid-column: 2 / span 1;
    display: grid;
    grid-template-columns: auto 1fr;
    font-size: 25pt;
    padding: 0;
  }
`;

const TextContainer = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20%;
  text-align: center;

  @media screen and (min-width: 800px) {
    display: flex;
    margin-bottom: 20%;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: auto;
  }
`;

const CartaA = styled.a`
  display: inline-block;
  font-family: var(--ff-bold);
  margin: 20px auto 0 0;
  text-transform: uppercase;
  border: solid 3px var(--color-dark);
  border-radius: 10px;
  background-color: transparent;
  padding: 1em 2em;
  font-size: 1.3rem;
  color: var(--color-dark);
  text-decoration: none;

  @media screen and (min-width: 800px) {
    margin-top: 10%;
  }
`;

const CustomA = styled.a`
  color: var(--color-dark);
  margin: 0 2em;
  font-size: 1.3em;
  @media screen and (min-width: 800px) {
    margin-top: 20%;
  }
`;

const bounce = keyframes`
    from {
      font-size: 1em;
    }
    to {
      font-size: 1.5em;
    }
`;

const CustomANext = styled(CustomA)`
  margin: 0;
  position: absolute;
  width: 80%;
  bottom: 25px;
  text-align: center;
  font-size: 1.2em;
  animation-duration: 1000ms;
  animation-name: ${bounce};
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const TitleLHome = styled(TitleL)`
  margin: 20px 0;
  font-size: 2em;
`;

interface HomeProps {
  sectionId: string;
}

export function Home({ sectionId }: HomeProps) {
  return (
    <HomeSection id={sectionId}>
      <HomeWrapper>
        <TextContainer>
          <TitleM>Iskender Kebap</TitleM>
          <TitleLHome>
            Descubre {window.innerWidth < 800 ? <br /> : ""} el verdadero <br />{" "}
            sabor turco
          </TitleLHome>
          <CartaA href="#carta">ver la carta</CartaA>
        </TextContainer>
        <IconsContainer>
          <CustomA href="tel:+3493384820" title="Teléfono">
            <span>
              <i className="fas fa-phone-alt"></i>
            </span>
          </CustomA>
          <CustomA
            title="Mapa"
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Capadocia/@41.4500602,2.246646,19z/data=!3m1!4b1!4m5!3m4!1s0x12a4bb0ded7876f7:0x9fda5e15a2ce818!8m2!3d41.4500592!4d2.2471932"
          >
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
          </CustomA>
        </IconsContainer>
      </HomeWrapper>
      <CustomANext href="#about">
        <span>
          <i className="fas fa-chevron-down"></i>
        </span>
      </CustomANext>
    </HomeSection>
  );
}
