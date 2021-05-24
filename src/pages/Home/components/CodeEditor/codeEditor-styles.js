import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const CodeEditorContainer = styled.div`
  display: block;
  width: 47rem;
  margin: 0 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const CodeInputContainer = styled.div`
  display: block;
  background-color: ${colors.darkGray};
  border-radius: 8px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);
  overflow: hidden;

  & svg {
    margin-left: 0.5rem;
    margin-top: 1rem;

    &:first-child {
      margin-left: 1rem;
    }
  }
`;

export const CodeInput = styled.textarea`
  resize: none;
  display: flex;
  padding-left: 1rem;
  padding-top: 1rem;
  width: ${(props) => props.width || '17.5rem'};
  max-width: ${(props) => props.maxWidth};
  font-family: 'Fira Code', monospace;
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.5rem;
  background-color: ${colors.darkGray};
  color: ${colors.white};
  border: 0;
  box-shadow: none;
`;
