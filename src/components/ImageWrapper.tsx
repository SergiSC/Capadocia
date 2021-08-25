import styled from "styled-components";

export const ImageWrapper = styled.div<{
  bgImage: string;
  border?: boolean;
  height?: string;
}>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "300px")};
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
