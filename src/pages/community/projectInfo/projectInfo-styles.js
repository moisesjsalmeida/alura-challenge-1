import styled from 'styled-components';
import colors from '../../../styles/colors';

export const InfoContainer = styled.div`
  background-color: ${colors.lighterTransparent};
  color: ${colors.white};
  padding: 2rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  & h3 {
    font-size: 1.313rem;
    font-weight: 700;
    line-height: 1.969rem;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &:hover {
    & > div {
      display: flex;
    }
  }
`;

export const CommunityInfoContainer = styled.div`
  display: none;
  margin-top: 2rem;
  align-items: center;
  transition: transform 1s;

  & .action-item {
    cursor: pointer;
    display: flex;
    flex-direction: row;

    & svg {
      margin-right: 0.5rem;

      &:hover {
        transform: scale(1.2);
        transition: transform 0.3s;
      }
    }

    & .commentIcon *:hover {
      fill: ${colors.blue100};
      transition: fill 0.3s;
    }

    & .heartIcon *:hover {
      fill: #ef4610;
      transition: fill 0.3s;
    }

    & span {
      margin-right: 1rem;
    }
  }
`;
