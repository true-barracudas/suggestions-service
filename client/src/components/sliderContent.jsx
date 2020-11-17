// details of shoe
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Photo from './photo.jsx';
import Details from './details.jsx';

const StyledSliderContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  padding-left: 10px;
`;

function SliderContent({ list }) {
  const items = list.map(({
    id, price, recycledMaterials, salePrice, series, shoeUrl, type,
  }) => (
      <Wrapper key={id}>
        <Photo url={shoeUrl}/>
        <Details
        price={price}
        recycled={recycledMaterials}
        salePrice={salePrice}
        series={series}
        type={type}/>
      </Wrapper>
  ));

  return (
    <StyledSliderContent>
      {items}
    </StyledSliderContent>
  );
}

SliderContent.propTypes = {
  list: PropTypes.array,
};

export default SliderContent;
