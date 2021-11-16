import React, { useCallback, useState } from "react";
import styled from "styled-components";

import Foto1 from "../assets/images/about/1.png";
import Foto2 from "../assets/images/about/2.png";
import Foto3 from "../assets/images/about/3.png";
import Foto4 from "../assets/images/about/4.png";
import { ImageWrapper } from "./ImageWrapper";

interface ImageCarrouselProps {
  width: number;
}

export function ImageCarrousel({ width }: ImageCarrouselProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const onClickLeftHandle = useCallback(() => {
    if (selectedImage === 3) {
      setSelectedImage(0);
    } else setSelectedImage(selectedImage + 1);
  }, [selectedImage, setSelectedImage]);

  const onClickRightHandle = useCallback(() => {
    if (selectedImage === 0) {
      setSelectedImage(3);
    } else setSelectedImage(selectedImage - 1);
  }, [selectedImage, setSelectedImage]);

  const allImages = [Foto1, Foto2, Foto3, Foto4];

  const selectImage = useCallback(() => {
    switch (selectedImage) {
      case 0:
        return Foto1;
      case 1:
        return Foto2;
      case 2:
        return Foto3;
      default:
        return Foto4;
    }
  }, [selectedImage]);

  return (
    <WrapperCarrousel>
      {width > 800 ? (
        allImages.map((i: string, index: number) => (
          <ImageWrapper key={index} bgImage={i} />
        ))
      ) : (
        <>
          <ImageWrapper bgImage={selectImage()} border />
          <ImageCarrouselButtonLeft onClick={onClickLeftHandle}>
            &#60;
          </ImageCarrouselButtonLeft>
          <ImageCarrouselButtonRight onClick={onClickRightHandle}>
            &#62;
          </ImageCarrouselButtonRight>
        </>
      )}
    </WrapperCarrousel>
  );
}

const WrapperCarrousel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  margin: 20px 0;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
  }
`;

const BaseButtonCarrousel = styled.button`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-weight: bolder;
  font-size: 12pt;
  border: none;
  opacity: 0.9;
  background-color: var(--color-soft);
`;

const ImageCarrouselButtonLeft = styled(BaseButtonCarrousel)`
  left: 0;
  transform: translate(-50%, -50%);
  border-left: solid 1px var(--color-dark);
`;

const ImageCarrouselButtonRight = styled(BaseButtonCarrousel)`
  right: 0;
  transform: translate(50%, -50%);
  border-right: solid 1px var(--color-dark);
`;
