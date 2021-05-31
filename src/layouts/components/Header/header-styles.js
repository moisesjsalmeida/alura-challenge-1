import styled from 'styled-components';

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

  & input {
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

    & input {
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
