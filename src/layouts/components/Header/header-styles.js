import styled from 'styled-components';
import colors from '../../../styles/colors';

export const HeaderContainer = styled.header`
  padding: 1rem;
  margin: 0 auto;
  max-width: 1440px;

  display: grid;
  grid-template-columns: 20% 59% 21%;
  align-items: center;

  & > div:first-child {
    width: 100%;
  }

  & > .search {
    display: block;
    width: 100%;
    padding-right: 1rem;
    align-self: left;
  }

  & .searchButton {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: auto;

    & img {
      width: 25px;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    & > div:first-child {
      width: 20%;
    }

    & > .search {
      display: block;
      width: 60%;
      padding-right: 1rem;
      align-self: left;
    }
  }

  @media (max-width: 700px) {
    max-width: 95vw;
  }
`;

export const MobileSearchInput = styled.input`
  display: none;
  position: fixed;
  left: 1rem;
  right: 4rem;
  z-index: 4;
  width: 65%;
  padding-left: 1rem;
  height: 3.5rem;
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.5rem;
  color: ${colors.uiText};
  background-color: #2d415a;
  border: 0;
  border-radius: 8px;
  box-shadow: none;

  transform: translateX(500px);
  transition-duration: 1s;

  &.mobile-search-open {
    display: flex;
    transform: translateX(0);
  }

  &::placeholder {
    color: ${colors.uiText};
    opacity: 0.64;
  }

  &:hover {
    background: #41536a;
  }
`;
