import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledText = styled.div`
  font-family: AdihausDIN;
  font-size: 13px;
  padding: 3px;
`;

const StyledSeries = styled.div`
  color: grey;
  font-family: AdihausDIN;
  font-size: 13px;
  padding: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

function Details({
  price, recycled, salePrice, series, type,
}) {
  return (
    <>
      <StyledSeries>{series}</StyledSeries>
      <StyledText>{type}</StyledText>
      <StyledText>${price}</StyledText>
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
