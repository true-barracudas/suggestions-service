// display photos and details of each shoe
import React, { useState } from 'react';
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

const Slider = (props) => {
  const [view, setView] = useState(0);
  return (
    <StyledSlider>
      <LeftArrow view={view} setView={setView}/>
      <SliderContent view={view} list={props.list} />
      <RightArrow view={view} setView={setView}/>
    </StyledSlider>
  );
};

Slider.propTypes = {
  list: PropTypes.array,
};

export default Slider;
