import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  list-style: none;
  padding: 0 8px;
  pointer-events: auto;
`;

const StyledBar = styled.li`
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 12px;
  padding: 4px 3px;
}
`;

const Span = styled.span`
  background: black;
  border-radius: 0;
  display: block;
  height: ${(props) => (props.view.toString() === props.id ? '5px' : '1px')};
  transition: .1s cubic-bezier(.3,0,.45,1);
  width: 22px;
  &:hover {
    height: 5px;
  }
`;

const Bars = ({ view, setView }) => {
  const updateView = (e) => {
    setView(Number(e.target.id));
  };
  return (
    <Wrapper>
      <StyledBar onClick={updateView}>
        <Span view={view} id='0' />
      </StyledBar>
      <StyledBar onClick={updateView}>
        <Span view={view} id='1' />
      </StyledBar>
      <StyledBar onClick={updateView}>
        <Span view={view} id='2' />
      </StyledBar>
      <StyledBar onClick={updateView}>
        <Span view={view} id='3' />
      </StyledBar>
    </Wrapper>
  );
};

Bars.propTypes = {
  view: PropTypes.number,
  setView: PropTypes.func,
};
export default Bars;
