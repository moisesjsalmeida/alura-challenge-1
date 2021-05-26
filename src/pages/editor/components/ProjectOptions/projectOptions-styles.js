import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const ProjectOptionsContainer = styled.div`
  /* margin-left: auto; */
  width: 20vw;
  min-width: 10rem;

  & h4 {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: 0.4em;
    color: ${colors.white};
    margin-bottom: 1.5rem;

    &:last-of-type {
      margin-top: 2.5rem;
      margin-bottom: 0.5rem;
    }
  }

  & input,
  textarea,
  button,
  select {
    width: 100%;
  }

  & input {
    margin-bottom: 1rem;
  }

  & button {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;

    & select,
    input[type='color'] {
      width: 49%;
    }
  }
`;

export const LanguageAndColorContainer = styled.div`
  & > select:first-of-type {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;

    & > select:first-of-type {
      margin-bottom: 0;
    }

    & > select,
    input[type='color'] {
      width: 33%;
    }
  }

  @media (max-width: 450px) {
    width: 100%;
    flex-direction: column;

    & > select:first-of-type {
      margin-bottom: 1rem;
    }

    & > select,
    input[type='color'] {
      width: 100%;
    }
  }
`;

export const ColorSelection = styled.input.attrs({ type: 'color' })`
  margin-top: 1rem;
  width: 17.5rem;
  height: 3.5rem;
  border: 1px solid ${colors.white};
  border-radius: 8px;
  padding: 5px;
  background-color: rgba(196, 196, 196, 0.01);
  cursor: pointer;

  @media (max-width: 768px) {
    width: 49%;
  }
`;
