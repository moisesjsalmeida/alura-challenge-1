import styled from 'styled-components';
import colors from '../../../styles/colors';

export const ProjectsContainer = styled.div`
  /* display: flex; */
`;

export const ProjectAndPropertiesContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  grid-gap: 1rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProjectDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .user-profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    & img {
      border-radius: 50%;
      width: 6rem;
      margin-right: 1rem;
    }

    & p {
      color: ${colors.uiText};
      line-height: 1.125rem;
      font-size: 1.05rem;
    }
  }

  & h4 {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: 0.4em;
    color: ${colors.uiText};
    margin-bottom: 1.5rem;
    background: transparent;
  }
`;

export const ProjectProperties = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.5rem;
  text-align: left;
  color: ${colors.uiText};
  background-color: ${colors.inputFields};
  border-radius: 8px;
  box-shadow: none;
  margin-bottom: 1rem;
  width: 100%;

  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
`;

export default ProjectsContainer;
