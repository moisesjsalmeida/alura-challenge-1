import styled from 'styled-components';

export const MainContainer = styled.main`
  padding: 1rem;
  margin: 0 auto;
  max-width: 1440px;
  display: grid;
  grid-template-columns: 20% 80%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
