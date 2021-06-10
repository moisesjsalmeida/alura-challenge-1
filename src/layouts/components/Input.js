import styled from 'styled-components';
import colors from '../../styles/colors';

export const TextInput = styled.input`
  display: flex;
  padding: 0 1rem;
  height: ${(props) => (props.height ? props.height : '3.5rem')};
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.5rem;
  color: ${colors.uiText};
  background-color: ${colors.inputFields};
  border: 0;
  border-radius: 8px;
  box-shadow: none;

  &::placeholder {
    color: ${colors.uiText};
    opacity: 0.64;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
`;

export default TextInput;
