import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  justify-self: right;

  @media (max-width: 768px) {
    display: block;
    width: 40px;
    height: 30px;
    z-index: 5;
    background-color: transparent;

    & .first,
    .second,
    .third {
      background-color: ${colors.white};
      height: 5px;
      width: 100%;
      margin: 6px auto;
      border-radius: 2px;

      transition-duration: 0.3s;
    }

    ${(props) =>
      props.open &&
      `
        & .first{
          transform: rotate(45deg) translate(7px, 7px);
        }

        & .second {
          opacity: 0;
        }

        & .third{
          transform: rotate(-45deg) translate(8px, -9px);
        }
    `}
  }
`;

export const MenuToggleContainer = styled.div`
  position: fixed;
  top: 5.5rem;
  right: 2rem;
  width: 16rem;
  height: 80vh;
  z-index: 10;
  background: ${colors.menuColor};
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

  transform: translateX(16rem) scaleX(0);
  transition: transform 0.3s;

  & > * {
    margin: 2rem 2rem 1rem;
    display: flex;
    width: 80%;
    justify-content: flex-start;

    &:first-child {
      padding-bottom: 2rem;
      border-bottom: 1px solid ${colors.transparent};
    }
  }

  &.menu-open {
    display: flex;
    flex-direction: column;
    transform: translateX(0) scaleX(1);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;

  z-index: 4;
  visibility: hidden;
  transition: all 0.2s;

  &.overlay-visible {
    visibility: visible;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
  }
`;
