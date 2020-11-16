// display photos and details of each shoe
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SliderContent from './sliderContent.jsx';

const StyledSlider = styled.div`
  display: flex;
`;

const Slider = (props) => (
  <StyledSlider>
    <SliderContent list={props.list} />
  </StyledSlider>
);

Slider.propTypes = {
  list: PropTypes.array,
};

export default Slider;
