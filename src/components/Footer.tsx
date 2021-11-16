import React from "react";

import styled, { css } from "styled-components";
import face from "../assets/icons/face.png";
import faceWhite from "../assets/icons/face_white.png";
import insta from "../assets/icons/insta.png";
import instaWhite from "../assets/icons/insta_white.png";
import logoWhite from "../assets/icons/logo_white.png";
import logo from "../assets/icons/logo.png";

const ContainerFooter = styled.div<{ height: number }>`
  background-color: var(--color-soft);
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: ${(props) => props.height}px;

  @media screen and (min-width: 800px) {
    background-color: var(--color-dark);
    grid-template-columns: 1fr 2fr 2fr 1fr;
  }
`;

const ImageWrapper = css`
  height: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ImageWrapperLeft = styled.div`
  ${ImageWrapper}
  justify-content: start;
  @media screen and (min-width: 800px) {
    grid-column: 2 / span 1;
  }
`;

const ImageWrapperRight = styled.div`
  ${ImageWrapper}
  justify-content: end;
  @media screen and (min-width: 800px) {
    grid-column: 3 / span 1;
    display: flex;
    flex-direction: row;
    gap: 40px;
  }
`;

const IconImage = styled.a`
  margin: auto 0;
  text-decoration: none;
  @media screen and (min-width: 800px) {
    display: flex;
  }
`;

const Image = styled.img`
  height: 30px;
  margin: auto;

  justify-content: center;
  margin: 0 20px;
`;

const ImageBig = styled(Image)<{ height: number }>`
  height: ${(props) => props.height}px;
`;

const IconSpan = styled.span`
  display: none;
  text-transform: capitalize;
  color: var(--color-soft);
  margin: auto 0;

  @media screen and (min-width: 800px) {
    display: inline;
  }
`;

interface FooterProps {
  sectionId: string;
  deviceWidth: number;
}

export function Footer({ sectionId, deviceWidth }: FooterProps) {
  return (
    <ContainerFooter id={sectionId} height={deviceWidth > 800 ? 100 : 80}>
      <ImageWrapperLeft>
        <IconImage href="#home">
          <ImageBig
            src={deviceWidth > 800 ? logoWhite : logo}
            alt="Home"
            height={deviceWidth > 800 ? 60 : 40}
          />
        </IconImage>
      </ImageWrapperLeft>
      <ImageWrapperRight>
        <IconImage
          href="https://www.facebook.com/capadociakebap/"
          target="_blank"
        >
          <Image src={deviceWidth > 800 ? faceWhite : face} alt="facebook" />
          <IconSpan>Facebook</IconSpan>
        </IconImage>
        <IconImage
          href="https://www.instagram.com/capadociakebap/"
          target="_blank"
        >
          <Image src={deviceWidth > 800 ? instaWhite : insta} alt="instagram" />
          <IconSpan>Instagram</IconSpan>
        </IconImage>
      </ImageWrapperRight>
    </ContainerFooter>
  );
}
