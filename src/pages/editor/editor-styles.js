import styled from 'styled-components';

export const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  grid-gap: 1rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export default EditorContainer;
