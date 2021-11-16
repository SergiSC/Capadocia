import React from "react";
import styled from "styled-components";
import { Product } from "../../data";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 10px 16px;
    margin-bottom: 10px;
`

const Row = styled.div`

`

const TitleColumn = styled.div`

`

const PriceColumn = styled(TitleColumn)`
`

const Title = styled.h3`
`

const Allergens = styled.div`
`

const Price = styled.div`
`

const Description = styled.p``

export function ItemCarta({titleEsp, titleCat, price, descriptionCat, descriptionEsp, allergens, vegetarian}:Product) {
    return (
        <Wrapper>
            <Row>
                <TitleColumn>
                    <Title>{titleEsp}</Title>
                    {titleCat && <Title>{titleCat}</Title>}
                </TitleColumn>
                <PriceColumn>
                    <Allergens></Allergens>
                    <Price>{price}</Price>
                </PriceColumn>
            </Row>
            <Row>
                {descriptionEsp && <Description>{descriptionEsp}</Description>}
                {descriptionCat && <Description>{descriptionCat}</Description>}
            </Row>
        </Wrapper>
    )
}