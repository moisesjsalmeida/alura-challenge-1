import styled from 'styled-components';
import colors from '../../styles/colors';

const CodeInputContainer = styled.div`
  position: relative;
  display: block;
  background-color: ${colors.darkGray};
  border-radius: 8px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);
  height: auto;
  min-height: 10rem;
  overflow: hidden;

  & .CodeMirror {
    padding: 2.5rem 2.5rem 0 1.5rem;
    width: 105%;
    height: auto;
  }

  & .CodeMirror-code {
    min-height: 10rem;
    padding-bottom: 1.5rem;
  }

  & .CodeMirror-scroll {
    overflow-y: hidden;
    overflow-x: auto !important;
  }

  & > .react-codemirror2 {
    font-family: 'Fira Code', monospace;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export default CodeInputContainer;
