import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  padding-left: 7px;
  align-items: center;
  z-index: 3;
`;

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  background-color: hsla(0,0%,100%,.7);
  &:hover {
    background-color: black;
  }
`;

const StyledLeftArrow = styled.svg`
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:hover {
    filter: invert(100%);
  }
`;

const LeftArrow = ({ view, setView }) => {
  const updateView = () => {
    if (view === 0) {
      setView(3);
    } else {
      setView(view - 1);
    }
  };
  return (
    <Container>
      <Wrapper>
        <StyledLeftArrow width="1.75rem" height="1.75rem" viewBox="0 0 10 24" onClick={updateView}>
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M8 5.5L1.5 12 8 18.5"></path>
        </StyledLeftArrow>
      </Wrapper>
    </Container>
  );
};

LeftArrow.propTypes = {
  list: PropTypes.string,
};
export default LeftArrow;
