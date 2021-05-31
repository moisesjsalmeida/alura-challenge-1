import styled from 'styled-components';
import colors from '../../styles/colors';

const CodeInputContainer = styled.div`
  display: block;
  background-color: ${colors.darkGray};
  border-radius: 8px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);
  overflow: hidden;

  & svg {
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;

    &:first-child {
      margin-left: 1rem;
    }
  }

  & .CodeMirror {
    padding: 2.5rem 1.5rem 0;
  }

  & > .ReactCodeMirror {
    font-family: 'Fira Code', monospace;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 768px) {
    & .CodeMirror {
      height: 29.5rem;
    }
  }
`;

export default CodeInputContainer;
