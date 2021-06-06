import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Modal = styled.div`
  position: fixed;
  background-color: ${colors.menuColor};
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 7;
  padding: 2rem;

  min-width: 300px;

  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h2 {
    padding: 2rem;
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
    color: ${colors.uiText};
  }

  & p {
    padding-bottom: 2rem;
    color: ${colors.uiText};
    text-align: center;
    opacity: 0.7;
    line-height: 1.5rem;
  }

  & button {
    & img {
      width: 2rem;
      margin-right: 2rem;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 6;
  visibility: hidden;
  transition: all 0.2s;

  &.overlay-visible {
    visibility: visible;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
  }
`;
