import styled from 'styled-components';
import colors from '../../../styles/colors';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  background: transparent;
  width: 20vw;
  min-width: 10rem;
  padding-left: 1rem;

  & img {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  & span {
    color: ${colors.white};
    font-size: 1rem;
    background: transparent;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
