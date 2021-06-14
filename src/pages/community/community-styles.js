import styled from 'styled-components';

export const CommunityContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1rem;

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CommunityItemContainer = styled.div``;

export default CommunityContainer;
