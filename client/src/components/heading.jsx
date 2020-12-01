import React from 'react';
import styled from 'styled-components';

const HeadingStyle = styled.h5`
  font-family: adineue pro bold web;
  font-size: 40px;
  padding: 0px;
  margin: 0px 0px 20px 0px;
  width: 100%;
`;

function Heading() {
  return (
    <HeadingStyle className="heading">YOU MAY ALSO LIKE</HeadingStyle>
  );
}

export default Heading;
