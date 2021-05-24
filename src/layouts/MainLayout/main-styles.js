import styled from 'styled-components';

export const MainContainer = styled.main`
  padding: 1rem;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
