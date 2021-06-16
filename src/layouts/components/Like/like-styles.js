import styled from 'styled-components';
import colors from '../../../styles/colors';

export const LikeButton = styled.svg`
  margin-right: 0.5rem;
  cursor: pointer;

  & * {
    ${(props) => props.liked && 'fill: #ef4610'};
  }

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s;
  }

  & *:hover {
    fill: #ef4610;
    transition: fill 0.2s;
  }
`;

export const LikeContainer = styled.div`
  padding: 1rem;
  background-color: ${colors.lighterTransparent};
  border-radius: 8px;

  & span {
    color: ${colors.uiText};
  }
`;

export default LikeButton;
