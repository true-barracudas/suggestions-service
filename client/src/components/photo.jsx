import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPhoto = styled.img`
  height: auto;
  width: auto;
  min-height: 45px;
  min-width: 45px;
`;

function Photo({ url }) {
  return (
    <StyledPhoto src={url}></StyledPhoto>
  );
}

Photo.propTypes = {
  url: PropTypes.string,
};

export default Photo;
