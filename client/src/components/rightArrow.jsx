import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  right: 11px;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 25px;
  height: 25px;
  background-color: hsla(0,0%,100%,.7);
  &:hover {
    background-color: black;
  }
`;

const StyledRightArrow = styled.svg`
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:hover {
    filter: invert(100%);
  }
`;

const RightArrow = ({ view, setView }) => {
  const updateView = () => {
    if (view === 3) {
      setView(0);
    } else {
      setView(view + 1);
    }
  };
  return (
    <Container>
      <Wrapper>
        <StyledRightArrow width="1.75rem" height="1.75rem" viewBox="0 0 10 24" onClick={updateView}>
          <path fill="none" stroke="black" strokeMiterlimit="10" strokeWidth="2" d="M2 5.5L8.5 12 2 18.5"></path>
        </StyledRightArrow>
      </Wrapper>
    </Container>
  );
};

RightArrow.propTypes = {
  view: PropTypes.number,
  setView: PropTypes.func,
};
export default RightArrow;
