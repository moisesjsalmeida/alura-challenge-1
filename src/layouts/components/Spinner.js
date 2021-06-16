import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <img src="/icons/loading.svg" alt="Carregando" />
    </SpinnerContainer>
  );
};

export default Spinner;
