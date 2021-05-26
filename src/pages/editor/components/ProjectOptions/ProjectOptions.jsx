import {
  ColorSelection,
  LanguageAndColorContainer,
  ProjectOptionsContainer,
} from './projectOptions-styles';
import TextInput from '../../../../layouts/components/Input';
import TextArea from '../../../../layouts/components/TextArea';
import Select from '../../../../layouts/components/Select';
import Button from '../../../../layouts/components/Button';
import { useCodeEditorContext } from '../../contexts/CodeEditorContext';

const ProjectOptions = () => {
  const { projectColor, handleChangeColor, setLanguage, setProjectTheme } =
    useCodeEditorContext();

  function handleChangeLanguage(e) {
    setLanguage(e.target.value);
  }

  function handleChangeTheme(e) {
    setProjectTheme(e.target.value);
  }

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
        <Select name="language" onChange={handleChangeLanguage}>
          <option value="javascript">JavaScript</option>
          <option value="xml">HTML</option>
          <option value="css">CSS</option>
          <option value="markdown">Markdown</option>
        </Select>
        <Select name="theme" onChange={handleChangeTheme}>
          <option value="dracula">Dracula</option>
          <option value="material">Material</option>
          <option value="cobalt">Cobalt</option>
          <option value="monokai">Monokai</option>
          <option value="mdn-like">MDN</option>
          <option value="default">Light</option>
        </Select>
        <ColorSelection
          value={projectColor}
          onChange={(e) => handleChangeColor(e.target.value)}
        />
      </LanguageAndColorContainer>
      <Button filled>Salvar Projeto</Button>
    </ProjectOptionsContainer>
  );
};

export default ProjectOptions;
