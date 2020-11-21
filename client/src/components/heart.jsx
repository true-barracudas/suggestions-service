import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  top: 5%;
  right: 10%;
  position absolute;
  cursor: pointer;
`;

const Heart = () => {
  const [heartFilled, setHeartFilled] = useState(false);

  return (
    <Wrapper onClick={() => setHeartFilled(!heartFilled)}>
      <svg
        viewBox="0 0 20 24"
        width="1.75rem"
        height="1.75rem"
      >
        <path
          fill={heartFilled ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"
        />
      </svg>
    </Wrapper>
  );
};

export default Heart;
