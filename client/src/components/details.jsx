import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledType = styled.div`
  font-family: AdihausDIN;
  font-size: 13px;
  padding: 3px;
`;

const StyledPrice = styled.div`
  font-family: AdihausDIN;
  font-size: 13px;
  padding: 3px;
  color: ${(props) => (props.salePrice !== 0 ? 'grey' : 'black')};
  text-decoration: ${(props) => (props.salePrice !== 0 ? 'line-through' : 'none')};
`;

const StyledSalePrice = styled.div`
  font-family: AdihausDIN;
  font-size: 13px;
  padding: 3px;
  color: red;
`;

const StyledSeries = styled.div`
  color: grey;
  font-family: AdihausDIN;
  font-size: 13px;
  padding: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
function Details({
  price, recycled, salePrice, series, type,
}) {
  console.log(typeof salePrice);
  const getPrice = () => {
    if (salePrice !== 0) {
      return (
        <Wrapper>
          <StyledSalePrice>${salePrice}</StyledSalePrice>
          <StyledPrice salePrice={salePrice}>${price}</StyledPrice>
        </Wrapper>
      );
    }
    return (
      <StyledPrice salePrice={salePrice}>${price}</StyledPrice>
    );
  };
  const itemPrice = getPrice();
  return (
    <>
      <StyledSeries>{series}</StyledSeries>
      <StyledType>{type}</StyledType>
      {itemPrice}
    </>
  );
}

Details.propTypes = {
  price: PropTypes.string,
  recycled: PropTypes.string,
  salePrice: PropTypes.string,
  series: PropTypes.string,
  type: PropTypes.string,
};

export default Details;
