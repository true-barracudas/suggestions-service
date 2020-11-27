import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledType = styled.div`
  font-family: AdihausDIN, Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin-top: 10px;
`;

const StyledPrice = styled.div`
  font-family: AdihausDIN, Helvetica, Arial, sans-serif;;
  font-size: 16px;
  padding: 3px;
  color: ${(props) => (props.salePrice !== 0 ? 'grey' : 'black')};
  text-decoration: ${(props) => (props.salePrice !== 0 ? 'line-through' : 'none')};
`;

const StyledSalePrice = styled.div`
  font-family: AdihausDIN,  Helvetica, Arial, sans-serif;
  font-size: 16px;
  padding: 3px;
  color: red;
`;

const StyledSeries = styled.div`
  color: grey;
  font-family: AdihausDIN,  Helvetica, Arial, sans-serif;
  font-size: 16px;
  padding: 0px 10px;
  margin-top: 10px;
`;

const WrapperPrices = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

const WrapperTypePrice = styled.div`
  height: 130px;
  padding: 0px 10px;
`;

function Details({
  price, recycled, salePrice, series, type,
}) {
  const getPrice = () => {
    if (salePrice !== 0) {
      return (
        <WrapperPrices>
          <StyledSalePrice>${salePrice}</StyledSalePrice>
          <StyledPrice salePrice={salePrice}>${price}</StyledPrice>
        </WrapperPrices>
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
      <WrapperTypePrice>
        <StyledType>{type}</StyledType>
        {itemPrice}
      </WrapperTypePrice>
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
