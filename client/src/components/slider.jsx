// display photos and details of each shoe
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SliderContent from './sliderContent.jsx';
import RightArrow from './rightArrow.jsx';
import LeftArrow from './leftArrow.jsx';
import Bars from './bars.jsx';

const Container = styled.div`
  height: 100%;
  display: flex;
  width: 1143.96px;
  flex-direction: column;
`;

const StyledSlider = styled.div`
  display: flex;
  overflow: hidden;
`;

const Slider = (props) => {
  const [view, setView] = useState(0);
  return (
    <Container>
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
  // return (
  //   <StyledSlider>
  //     <LeftArrow view={view} setView={setView}/>
  //     <SliderContent view={view} list={props.list} />
  //     <RightArrow view={view} setView={setView}/>
  //     <Bars view={view} setView={setView} list={props.list}/>
  //   </StyledSlider>
  // );
};

Slider.propTypes = {
  list: PropTypes.array,
};

export default Slider;
