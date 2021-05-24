import styled from 'styled-components';
import colors from '../../styles/colors';

export const Select = styled.select`
  display: flex;
  padding: 0 1rem;
  width: ${(props) => props.width || '17.5rem'};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => (props.height ? props.height : '3.5rem')};
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.5rem;
  color: ${colors.white};
  background-color: ${colors.inputFields};
  border: 0;
  border-radius: 8px;
  box-shadow: none;
  appearance: none;
  background-image: url('icons/down_arrow.svg');
  background-position: right 1rem top 50%;
  background-repeat: no-repeat;
  background-size: 12px;

  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
`;

export default Select;
