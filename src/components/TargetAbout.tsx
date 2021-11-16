import React from "react";
import styled from "styled-components";
import { TargetListProp } from "../data";
import { TitleM } from "../views/About";
import { ImageWrapper } from "./ImageWrapper";

const TargetWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 20px;
`;

const ImageWrapperTarget = styled(ImageWrapper)`
  background-size: contain;
  margin: auto 0;
`;

export function TargetAbout(target: TargetListProp) {
  const { image, title, description } = target;
  return (
    <TargetWrapper>
      <ImageWrapperTarget height="40px" bgImage={image} />
      <div>
        <TitleM>{title}</TitleM>
        <div>{description}</div>
      </div>
    </TargetWrapper>
  );
}
