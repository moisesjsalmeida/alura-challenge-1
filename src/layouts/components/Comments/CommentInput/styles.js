import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const CommentInputContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & button {
    transform: translateY(-25%);
  }
`;

export default CommentInputContainer;
