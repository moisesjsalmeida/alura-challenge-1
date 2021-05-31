import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1rem;
  margin: 0 auto;
  max-width: 1440px;

  display: flex;
  flex-direction: row;
  align-items: center;

  & > div:first-child {
    width: 20vw;
    padding-right: 5rem;
  }

  & input {
    display: block;
    width: 100%;
    margin: 0 1rem;
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
`;
