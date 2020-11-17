// left and right arrows for navigating views
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  right: 0px;
  align-items: center;
  transform: translateY(70px);
`;

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  &:hover {
    background-color: black;
  }
`;

const StyledRightArrow = styled.svg`
  width: 24px;
  height: 24px;
  &:hover {
    filter: invert(100%);
  }
`;

const RightArrow = (props) => (
  <Container>
    <Wrapper>
      <StyledRightArrow width="1.5rem" height="1.5rem" viewBox="0 0 10 24">
        <path fill="none" stroke="black" strokeMiterlimit="10" strokeWidth="2" d="M2 5.5L8.5 12 2 18.5"></path>
      </StyledRightArrow>
    </Wrapper>
  </Container>
);

RightArrow.propTypes = {
  list: PropTypes.string,
};
export default RightArrow;
