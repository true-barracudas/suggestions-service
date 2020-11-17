// left and right arrows for navigating views
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// const StyledRightArrow = styled.button`
//   color: black;
//   height: 30px;
//   width: 30px;
//   font-size: 40px;
//   display: inline-block;
//   line-height: 0px;
//   &:hover {
//     color: white;
//     background-color: black;
//   }
// `;

const Container = styled.div`
  position: absolute;
  display: flex;
  top: 250px;
  height: 100%;
  right: 0;
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
