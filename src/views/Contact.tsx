import React from "react";
import styled from "styled-components";
import { StyledSection, TitleL, TitleM } from "./About";
import contactImage from "../assets/images/contact.jpg";

const ContactSection = styled(StyledSection)`
  @media screen and (min-width: 800px) {
    height: 30vh;
    grid-template-columns: 1fr minmax(400px, 2fr) minmax(400px, 2fr) 1fr;
    padding: 0;
  }
`;

const ImageHeader = styled.div`
  height: 45vh;
  background-image: url(${contactImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1em 10%;
  @media screen and (min-width: 800px) {
    grid-column: 2 / span 1;
  }
`;

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1em 10%;
  background-color: var(--color-dark);
  color: var(--color-soft);
  @media screen and (min-width: 800px) {
    border-left: 2px dashed var(--color-dark);
    grid-column: 3 / span 1;
    background-color: transparent;
    color: var(--color-dark);
    text-align: end;
    justify-content: initial;
    margin: 10% 0;
  }
`;

const CustomA = styled.a`
  color: var(--color-dark);
  text-decoration: none;
  @media screen and (min-width: 800px) {
    display: flex;
    margin-top: 30px;
    gap: 20px;
  }
`;

const StyledH2 = styled.h2`
  margin-top: 0;
  @media screen and (min-width: 800px) {
    margin-bottom: 0;
  }
`;

const SmallStyledH2 = styled.h2`
  font-size: 0.9em;
  margin-bottom: 0;
`;

const StyledSpan = styled.span`
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

interface ContactProps {
  sectionId: string;
  deviceWidth: number;
}

export function Contact({ sectionId, deviceWidth }: ContactProps) {
  let iMapClass = "fa fa-map-marker-alt";
  let iPhoneClass = "fas fa-phone-alt";
  if (deviceWidth > 800) {
    iMapClass += " fa-2x";
    iPhoneClass += " fa-2x";
  }
  return (
    <>
      <ImageHeader />
      <ContactSection id={sectionId} removePadding>
        <ContactWrapper>
          <TitleM>nuestro</TitleM>
          <TitleL>contacto</TitleL>
          <CustomA
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Capadocia/@41.4500602,2.246646,19z/data=!3m1!4b1!4m5!3m4!1s0x12a4bb0ded7876f7:0x9fda5e15a2ce818!8m2!3d41.4500592!4d2.2471932"
          >
            <StyledSpan>
              <i className={iMapClass}></i>
            </StyledSpan>
            <StyledH2>
              Carrer de Francesc Layret, 79,
              {deviceWidth < 800 && <br />}
              08911 Badalona, Barcelona
            </StyledH2>
          </CustomA>
          <CustomA href="tel:+3493384820">
            <StyledSpan>
              <i className={iPhoneClass}></i>
            </StyledSpan>
            <StyledH2>+34 933 84 82 02</StyledH2>
          </CustomA>
        </ContactWrapper>
        <ScheduleWrapper>
          <TitleL align={deviceWidth > 800 ? "end" : "start"}>horario</TitleL>
          <SmallStyledH2>abrimos todos los días de</SmallStyledH2>
          <StyledH2>
            Lunes a Domingo
            <br />
            13:00h a 01:00h
          </StyledH2>
        </ScheduleWrapper>
      </ContactSection>
    </>
  );
}
