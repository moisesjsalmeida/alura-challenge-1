import styled from 'styled-components';
import colors from '../../../styles/colors';

export const CommentsSection = styled.div`
  & h4 {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: 0.4em;
    color: ${colors.white};
    margin-bottom: 1.5rem;
    background: transparent;

    display: flex;
    flex-direction: column;
  }
`;
