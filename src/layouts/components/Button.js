import styled from 'styled-components';
import colors from '../../styles/colors';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || '17.5rem'};
  height: 3.5rem;
  margin-top: 2rem;
  background-color: ${(props) =>
    props.filled ? colors.blue300 : 'rgba(80, 129, 251, 0.08)'};
  color: ${(props) => (props.outlined ? colors.white : colors.darkBlue)};
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.5rem;
  border: 0;
  border-radius: 8px;
  box-shadow: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.filled ? colors.blue200 : 'rgba(80, 129, 251, 0.16)'};
  }

  &:active {
    background-color: ${(props) =>
      props.filled ? colors.blue200 : 'rgba(80, 129, 251, 0.16)'};
    border: ${(props) =>
      props.filled
        ? '4px solid rgba(80, 129, 251, 0.72)'
        : '4px solid rgba(80, 129, 251, 0.24)'};
  }

  &:focus {
    background-color: ${(props) =>
      props.filled ? colors.blue100 : 'rgba(80, 129, 251, 0.24)'};
  }
`;

export default Button;
