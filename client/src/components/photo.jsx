import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heart from './heart.jsx';

const StyledPhoto = styled.img`
  width: 220px;
`;

const Wrapper = styled.div`
  display: flex;
`;

function Photo({ url }) {
  return (
    <Wrapper>
      <Heart />
      <StyledPhoto src={url}></StyledPhoto>
    </Wrapper>
  );
}

Photo.propTypes = {
  url: PropTypes.string,
};

export default Photo;
