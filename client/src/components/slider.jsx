import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SliderContent from './sliderContent.jsx';
import RightArrow from './rightArrow.jsx';
import LeftArrow from './leftArrow.jsx';
import Bars from './bars.jsx';
import WIDTH from '../constants';

const Container = styled.div`
  height: 100%;
  display: flex;
  width: ${WIDTH}px;
  flex-direction: column;
`;
// const Container = styled.div`
//   height: 100%;
//   display: flex;
//   width: 1143.96px;
//   flex-direction: column;
// `;

const StyledSlider = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Slider = (props) => {
  const [view, setView] = useState(0);
  return (
    <Container className="slider">
        <StyledSlider>
          <LeftArrow view={view} setView={setView}/>
          <SliderContent view={view} list={props.list} />
          <RightArrow view={view} setView={setView}/>
        </StyledSlider>
        <div>
          <Bars view={view} setView={setView} list={props.list}/>
        </div>
    </Container>
  );
};

Slider.propTypes = {
  list: PropTypes.array,
};

export default Slider;
