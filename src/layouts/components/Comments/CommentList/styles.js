import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Comment = styled.div`
  background: ${colors.lighterTransparent};
  border-radius: 8px;
  margin-top: 1rem;
`;

export const CommentHeader = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  & img {
    width: 1.5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  & span {
    color: ${colors.uiText};
    filter: brightness(0.8);
    font-size: 0.75rem;
  }
`;

export const CommentContent = styled.div`
  padding: 0.5rem;
  color: ${colors.uiText};
`;

export const EmptyComments = styled.div`
  background: ${colors.lighterTransparent};
  border-radius: 8px;
  margin-top: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${colors.uiText};
  filter: brightness(0.8);
`;
