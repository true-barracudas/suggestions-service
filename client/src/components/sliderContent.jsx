import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Photo from './photo.jsx';
import Details from './details.jsx';
import WIDTH from '../constants';

const StyledSliderContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  margin: 0 5px;
  transform: translateX(-${(props) => (props.view * WIDTH)}px);
  transition: transform 0.5s;
  border: 0.5px solid transparent;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
    }
`;

function SliderContent({ view, list }) {
  const items = list.map(({
    id, price, recycledMaterials, salePrice, series, shoeUrl, type,
  }) => (
      <Wrapper view={view} key={id}>
        <Photo url={shoeUrl} />
        <Details
          price={price}
          recycled={recycledMaterials}
          salePrice={salePrice}
          series={series}
          type={type} />
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
