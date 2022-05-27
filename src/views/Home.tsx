import React, { useCallback, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { TitleL, TitleM } from "./About";
import bgImageMenu from "../assets/images/bg-kebab.jpg";
import bgImageLandscape from "../assets/images/bgImageLandscape.jpeg";
import { useInterval } from "../hooks/interval";

const intervalSeconds = 8;

const fadeInOut = keyframes`
    0% {
      opacity: 0.2;
    }
    5% {
      opacity: 1;
    }
    95% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
`;

const shake = keyframes`
    0% {transform: rotate(0deg);}
    10% {transform: rotate(-10deg);}
    20% {transform: rotate(10deg);}
    30% {transform: rotate(10deg);}
    40% {transform: rotate(-10deg);}
    50% {transform: rotate(-10deg);}
    60% {transform: rotate(10deg);}
    70% {transform: rotate(10deg);}
    80% {transform: rotate(-10deg);}
    90% {transform: rotate(-10deg);}
    100% {transform: rotate(0deg);}
`;

const jump = keyframes`
    0% {transform: translateY(0);}
    30% {transform: translateY(-15px);}
    50% {transform: translateY(15px);}
    80% {transform: translateY(-8px);}
    100% {transform: translateY(8px);}
`;

const animation = css`
  -webkit-animation: ${fadeInOut} ${intervalSeconds}s ease-in-out infinite;
  animation: ${fadeInOut} ${intervalSeconds}s ease-in-out infinite;
`;

const HomeSection = styled.section<{ bgImage: string }>`
  position: relative;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  padding: 0 10%;
  font-size: 16pt;
  height: calc(100vh - 80px);
  color: var(--color-dark);
  padding-top: 80px;
  ${animation}

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
    background-image: url(${(props) => props.bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 3fr minmax(700px, 6fr) minmax(100px, 1fr) 1fr;
    padding: 0;
  }

  @media screen and (max-width: 350px) {
    font-size: 12pt;
  }
`;

// const HomeWrapper = styled.div`
//   @media screen and (min-width: 800px) {
//     grid-column: 2 / span 1;
//     display: grid;
//     grid-template-columns: 4fr 1fr;
//     font-size: 25pt;
//     padding: 0;
//   }
// `;

const TextContainer = styled.div`
  grid-column: 2 / span 1;
  font-size: 25pt;
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const IconsContainer = styled.div`
  font-size: 25pt;
  display: flex;
  justify-content: center;
  margin-top: 20%;
  text-align: center;

  @media screen and (min-width: 800px) {
    display: flex;
    margin-bottom: 80%;
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
    box-shadow: 0 0 0 0 #888888;

    :hover {
      color: var(--color-soft);
      background-color: var(--color-dark);
      box-shadow: 0 0 10px 2px #888888;
      transition: box-shadow 200ms ease-in-out, color 200ms ease-in-out,
        background-color 200ms ease-in-out;
    }
  }
`;

const CustomA = styled.a`
  color: var(--color-dark);
  margin: 0 2em;
  font-size: 1.3em;
  @media screen and (min-width: 800px) {
    margin-top: 20%;
    margin-right: 0;
  }
`;

const Telephone = styled(CustomA)`
  @media screen and (min-width: 800px) {
    :hover {
      -webkit-animation: ${shake} 300ms ease;
      animation: ${shake} 300ms ease;
    }
  }
`;

const Map = styled(CustomA)`
  @media screen and (min-width: 800px) {
    :hover {
      -webkit-animation: ${jump} 500ms ease;
      animation: ${jump} 500ms ease;
    }
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
  font-size: 1.7em;
  white-space: pre-line;
`;

interface slide {
  id: number;
  image: string;
  littleText: string;
  buttonText: string;
  textMovil: string;
  textDesktop: string;
}

const initialSlideState: slide = {
  id: 0,
  image: bgImageLandscape,
  littleText: "Iskender Kebap",
  buttonText: "ver la carta",
  textMovil: "Descubre \n el verdadero \n sabor turco",
  textDesktop: "Descubre el verdadero \n sabor turco",
};

interface HomeProps {
  sectionId: string;
  deviceWidth: number;
}

export function Home({ sectionId, deviceWidth }: HomeProps) {
  const [slideState, setSlideState] = useState(initialSlideState);

  const changeSlide = useCallback(() => {
    let newId = slideState.id + 1 < 2 ? slideState.id + 1 : 0;
    switch (newId) {
      case 0:
        setSlideState(initialSlideState);
        break;
      case 1:
        setSlideState({
          id: newId,
          image: bgImageMenu,
          littleText: "Menu Kebap",
          buttonText: "7,50€",
          textMovil: "dürüm kebap\n + patatas fritas\n + bebida",
          textDesktop: "dürüm kebap\n + patatas fritas + bebida",
        });
        break;

      default:
        break;
    }
  }, [setSlideState, slideState]);

  useInterval(changeSlide, intervalSeconds);

  return (
    <HomeSection id={sectionId} bgImage={slideState.image}>
      <TextContainer>
        <TitleM>{slideState.littleText}</TitleM>
        <TitleLHome>
          {deviceWidth > 800 ? slideState.textDesktop : slideState.textMovil}
        </TitleLHome>
        <CartaA href="#carta">{slideState.buttonText}</CartaA>
      </TextContainer>
      <IconsContainer>
        <Telephone href="tel:+3493384820" title="Teléfono">
          <span>
            <i className="fas fa-phone-alt"></i>
          </span>
        </Telephone>
        <Map
          title="Mapa"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/Capadocia/@41.4500602,2.246646,19z/data=!3m1!4b1!4m5!3m4!1s0x12a4bb0ded7876f7:0x9fda5e15a2ce818!8m2!3d41.4500592!4d2.2471932"
        >
          <span>
            <i className="fas fa-map-marker-alt"></i>
          </span>
        </Map>
      </IconsContainer>
      <CustomANext href="#about">
        <span>
          <i className="fas fa-chevron-down"></i>
        </span>
      </CustomANext>
    </HomeSection>
  );
}
