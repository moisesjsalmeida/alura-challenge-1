import styled from 'styled-components';

import colors from '../../../styles/colors';

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 20vw;
  /* margin-right: auto; */
  background: transparent;

  & ul {
    list-style-type: none;
    background: transparent;
    & li {
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
      opacity: 0.56;
      background: transparent;
      & a {
        display: flex;
        align-items: center;
        text-decoration: none;
        background: transparent;
      }
      &.active {
        opacity: 1;
      }

      & p {
        color: ${colors.white};
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        margin-left: 1rem;
        background: transparent;
      }
    }
  }

  & h4 {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: 0.4em;
    color: ${colors.white};
    margin-bottom: 1.5rem;
    background: transparent;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 3rem;
  height: 3rem;
  color: ${colors.white};
  background-color: ${colors.blue300};
  border-radius: 16px;

  & > img {
    background-color: transparent;
    width: 1rem;
    height: auto;
  }
`;
