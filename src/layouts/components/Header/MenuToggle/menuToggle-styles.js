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
    z-index: 3;
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
  width: auto;

  @media (max-width: 768px) {
    ${(props) =>
      props.open &&
      `
      position: absolute;
      top: 7rem;
      right: 2rem;
      width: 16rem;
      height: 73vh;
      z-index: 2;
      display: flex;
      flex-direction: column;

      background: ${colors.menuColor};
      border-radius: 8px;


      animation: slideIn 0.2s ease-out;
      

        & > *{
          margin: 2rem 2rem 1rem;
          display: flex;
          width: 80%;
          justify-content: flex-start;

          &:first-child {
            padding-bottom: 2rem;
            border-bottom: 1px solid ${colors.transparent};
          }
          
        }
      }
    `}

    @keyframes slideIn {
      0% {
        transform: translateX(50%) scaleX(0);
      }
      100% {
        transform: translateX(0) scaleX(100%);
      }
    }

    @keyframes slideOut {
      0% {
        transform: translateX(0) scaleX(100%);
      }
      100% {
        transform: translateX(50%) scaleX(0);
      }
    }
  }
`;

//
