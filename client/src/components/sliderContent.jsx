// details of shoe
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Photo from './photo.jsx';
import Details from './details.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function SliderContent({ list }) {
  const items = list.map(({
    id, price, recycledMaterials, salePrice, series, shoeUrl, type,
  }) => (
      <div key={id}>
        <Photo url={shoeUrl}/>
        <Details
        price={price}
        recycled={recycledMaterials}
        salePrice={salePrice}
        series={series}
        type={type}/>
      </div>
  ));

  return (
    <Container>{items}</Container>
  );
}

SliderContent.propTypes = {
  list: PropTypes.array,
};

export default SliderContent;
