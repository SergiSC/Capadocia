import React from "react";

import styled from "styled-components";
import face from "../assets/icons/face.png";
import insta from "../assets/icons/insta.png";
import logoWhite from "../assets/icons/logo_white.png";

const ContainerFooter = styled.div`
  background-color: var(--color-dark);
  display: grid;
  grid-template-columns: 4fr 1fr;
  height: 80px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-self: flex-start;

  @media screen and (min-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

const IconImage = styled.a`
  margin: auto;
  text-decoration: none;
`;

const Image = styled.img`
  height: 30px;
  margin: auto;

  justify-content: center;
  margin-left: 20px;
`;

const ImageBig = styled(Image)`
  height: 60px;
`;

const IconSpan = styled.span`
  display: none;
  text-transform: capitalize;
  color: var(--color-soft);
  margin: auto;

  @media screen and (min-width: 800px) {
    display: inline;
  }
`;

interface FooterProps {
  sectionId: string;
}

export function Footer({ sectionId }: FooterProps) {
  return (
    <ContainerFooter id={sectionId}>
      <ImageWrapper>
        <IconImage href="#home">
          <ImageBig src={logoWhite} alt="Home" />
        </IconImage>
      </ImageWrapper>
      <ImageWrapper>
        <IconImage
          href="https://www.facebook.com/capadociakebap/"
          target="_blanck"
        >
          <Image src={face} alt="facebook" />
          <IconSpan>Facebook</IconSpan>
        </IconImage>
        <IconImage
          href="https://www.instagram.com/capadociakebap/"
          target="_blanck"
        >
          <Image src={insta} alt="instagram" />
          <IconSpan>Instagram</IconSpan>
        </IconImage>
      </ImageWrapper>
    </ContainerFooter>
  );
}
