import styled from 'styled-components';

export const CodePreviewContainer = styled.div`
  width: 100%;

  & .CodeMirror {
    height: ${(props) => (props.detailed ? '5000px' : '25vh')};
  }
`;

export default CodePreviewContainer;
