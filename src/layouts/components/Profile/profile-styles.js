import styled from 'styled-components';
import colors from '../../../styles/colors';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  background: transparent;
  padding-left: 14rem;

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

  @media (max-width: 1213px) {
    padding-left: 10rem;
  }
  @media (max-width: 1021px) {
    padding-left: 8rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
