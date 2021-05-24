import {
  ColorSelection,
  LanguageAndColorContainer,
  ProjectOptionsContainer,
} from './projectOptions-styles';
import TextInput from '../../../../layouts/components/Input';
import TextArea from '../../../../layouts/components/TextArea';
import Select from '../../../../layouts/components/Select';
import Button from '../../../../layouts/components/Button';

const ProjectOptions = () => {
  return (
    <ProjectOptionsContainer>
      <h4>SEU PROJETO</h4>
      <TextInput placeholder="Nome do seu projeto" />
      <TextArea
        rows={4}
        contenteditable
        placeholder="Descrição do seu projeto"
      />

      <h4>PERSONALIZAÇÃO</h4>
      <LanguageAndColorContainer>
        <Select name="language">
          <option value="1">JavaScript</option>
          <option value="2">HTML</option>
          <option value="3">CSS</option>
        </Select>
        <ColorSelection value="#6BD1FF" />
      </LanguageAndColorContainer>
      <Button filled>Salvar Projeto</Button>
    </ProjectOptionsContainer>
  );
};

export default ProjectOptions;
