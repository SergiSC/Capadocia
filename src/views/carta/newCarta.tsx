import React, { Fragment, useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { menu, Product, TypeProduct } from "../../data";
import { StyledSection, TitleL, TitleM } from "../About";

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 16px 0;
  margin: 0 auto;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-transform: Uppercase;
  font-size: 1.5rem;
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;

const Title = styled.h3`
  font-weight: bold;
`;

const Allergens = styled.div`
  display: flex;
  gap: 5px;
  margin-right: auto;
  img {
    height: 50px;
    width: 50px;
  }

  @media screen and (max-width: 800px) {
    font-size: 1rem;
    img {
      height: 30px;
      width: 30px;
    }
  }
`;

const DivLine = styled.div`
  width: 50%;
  border-bottom: 1px solid #ccc;
  margin: 0 auto;
  :last-child {
    display: none;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Description = styled.span`
  font-size: 1.5rem;
  margin-bottom: 20px;
  justify-self: start;

  :first-letter {
    text-transform: Uppercase;
  }
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;

export function ItemCarta({
  titleEsp,
  price,
  descriptionEsp,
  allergens,
  vegetarian,
}: Product) {
  const calculatePrice = useCallback(() => {
    return (
      price + (price % 1 === 0 ? ".00" : (price * 10) % 1 === 0 ? "0" : "")
    );
  }, [price]);

  const realPrice = calculatePrice();

  return (
    <Wrapper>
      <Row>
        <Title>{titleEsp}</Title>
        <Allergens>
          {vegetarian && (
            <img src={`/assets/allergens/veggie.png`} alt="error" />
          )}
          {allergens.length > 0 &&
            allergens.map((a) => {
              const allergenImage = `/assets/allergens/${a}.png`;
              return <img src={allergenImage} alt="error" key={a} />;
            })}
        </Allergens>
        <div style={{ width: "fit-content", whiteSpace: "nowrap" }}>
          {realPrice} €
        </div>
      </Row>
      {descriptionEsp && <Description>{descriptionEsp}</Description>}
    </Wrapper>
  );
}

const NavCarta = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  gap: 1em;

  @media screen and (min-width: 800px) {
    gap: 3em;
  }
`;

const NavTab = styled.button<{ selected: boolean }>`
  background-color: transparent;
  border: none;
  border-radius: 0;
  white-space: nowrap;
  padding: 1em 0;
  color: var(--color-medium);
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      color: var(--color-dark);
      outline: none;
      font-weight: bold;
    `}

  :focus {
    color: var(--color-dark);
    outline: none;
    font-weight: bold;
  }

  @media screen and (min-width: 800px) {
    font-size: 1.1rem;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled(StyledSection)`
  min-height: 100vh;
`;

interface CartaProps {
  sectionId: string;
  deviceWidth: number;
}

export function Carta({ sectionId, deviceWidth }: CartaProps) {
  const [activeCategory, setActiveCategory] = useState<number>(menu[0].type);
  const getCategoryIndex = useCallback(
    () => menu.findIndex((i) => i.type === activeCategory),
    [activeCategory]
  );

  return (
    <Section id={sectionId}>
      <div style={{ gridColumn: 2 }}>
        <TitleM>la</TitleM>
        <TitleL>carta</TitleL>
        <NavCarta>
          {menu.map((category, index) => (
            <NavTab
              selected={category.type === activeCategory}
              key={index}
              onClick={() => setActiveCategory(category.type)}
            >
              {TypeProduct.get(category.type)}
            </NavTab>
          ))}
        </NavCarta>
        <Items>
          {menu[getCategoryIndex()].products.map((p) => (
            <Fragment key={p.id}>
              <ItemCarta {...p} />
              <DivLine />
            </Fragment>
          ))}
        </Items>
      </div>
    </Section>
  );
}
