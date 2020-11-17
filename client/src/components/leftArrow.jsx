import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  padding-left: 10px;
  align-items: center;
  transform: translateY(70px);
  z-index: 100;
`;

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  &:hover {
    background-color: black;
  }
`;

const StyledLeftArrow = styled.svg`
  width: 24px;
  height: 24px;
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
        <StyledLeftArrow width="1.5rem" height="1.5rem" viewBox="0 0 10 24" onClick={updateView}>
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
