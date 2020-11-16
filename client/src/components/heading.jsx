import React from 'react';
import styled from 'styled-components';

const HeadingStyle = styled.h5`
  font-family: adihaus;
  font-size: 30px;
  padding: 0px;
  margin: 0px;
`;

function Heading() {
  return (
    <HeadingStyle>YOU MAY ALSO LIKE</HeadingStyle>
  );
}

export default Heading;
