// details of shoe
import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Photo from './photo.jsx';
import Details from './details.jsx';

const StyledSliderContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  margin: 0 4px;
  transform: translateX(-${(props) => (props.view * 1143.96)}px);
  transition: transform 0.5s;
  border: 0.2px solid transparent;
  &:hover {
    border: 0.8px solid black;
  }
`;

function SliderContent({ view, list }) {
  const items = list.map(({
    id, price, recycledMaterials, salePrice, series, shoeUrl, type,
  }) => (
      <Wrapper view={view} key={id}>
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
  view: PropTypes.number,
  list: PropTypes.array,
};

export default SliderContent;
