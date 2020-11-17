// display photos and details of each shoe
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SliderContent from './sliderContent.jsx';
import RightArrow from './rightArrow.jsx';
import LeftArrow from './leftArrow.jsx';

const StyledSlider = styled.div`
  display: flex;
  position: absolute;
  width: 1143.96px;
  overflow: hidden;
`;

const Slider = (props) => (
  <StyledSlider>
    <LeftArrow />
    <SliderContent list={props.list} />
    <RightArrow />
  </StyledSlider>
);

Slider.propTypes = {
  list: PropTypes.array,
};

export default Slider;
