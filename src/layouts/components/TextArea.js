import styled from 'styled-components';
import colors from '../../styles/colors';

export const TextArea = styled.textarea`
  resize: none;
  display: flex;
  padding-left: 1rem;
  padding-top: 1rem;
  width: ${(props) => props.width || '17.5rem'};
  max-width: ${(props) => props.maxWidth};
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.5rem;
  color: ${colors.white};
  background-color: ${colors.inputFields};
  border: 0;
  border-radius: 8px;
  box-shadow: none;

  &::placeholder {
    color: ${colors.white};
    opacity: 0.64;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
`;

export default TextArea;
