import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  position: relative;

  & img {
    position: absolute;
    width: 3rem;
    top: 50%;
    left: 50%;
  }
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <img src="/icons/loading.svg" alt="Carregando" />
    </SpinnerContainer>
  );
};

export default Spinner;
