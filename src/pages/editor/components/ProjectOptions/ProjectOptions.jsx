import {
  ColorSelection,
  LanguageAndColorContainer,
  ProjectOptionsContainer,
} from './projectOptions-styles';
import TextInput from '../../../../layouts/components/Input';
import TextArea from '../../../../layouts/components/TextArea';
import Select from '../../../../layouts/components/Select';
import Button from '../../../../layouts/components/Button';
import useCodeEditorContext from '../../../../hooks/CodeEditorContext';

const ProjectOptions = () => {
  const {
    projectColor,
    handleChangeColor,
    loading,
    setLanguage,
    setProjectTheme,
    setProjectTitle,
    setProjectDescription,
    handleSaveProject,
    exportJPG,
  } = useCodeEditorContext();

  function handleChangeLanguage(e) {
    setLanguage(e.target.value);
  }

  function handleChangeTheme(e) {
    setProjectTheme(e.target.value);
  }

  function handleTitle(e) {
    setProjectTitle(e.target.value);
  }

  function handleDescription(e) {
    setProjectDescription(e.target.value);
  }

  return (
    <ProjectOptionsContainer>
      <h4>SEU PROJETO</h4>
      <TextInput placeholder="Nome do seu projeto" onChange={handleTitle} />
      <TextArea
        rows={4}
        contenteditable
        placeholder="Descrição do seu projeto"
        onChange={handleDescription}
      />

      <h4>PERSONALIZAÇÃO</h4>
      <LanguageAndColorContainer>
        <Select
          name="language"
          onChange={handleChangeLanguage}
          defaultValue="javascript"
        >
          <option value="css">CSS</option>
          <option value="go">Go</option>
          <option value="xml">HTML</option>
          <option value="javascript">JavaScript</option>
          <option value="php">PHP</option>
          <option value="python">Python</option>
          <option value="r">R</option>
          <option value="sql">SQL</option>
        </Select>
        <Select
          name="theme"
          onChange={handleChangeTheme}
          defaultValue="dracula"
        >
          <option value="cobalt">Cobalt</option>
          <option value="dracula">Dracula</option>
          <option value="default">Light</option>
          <option value="material">Material</option>
          <option value="mdn-like">MDN</option>
          <option value="monokai">Monokai</option>
          <option value="nord">Nord</option>
          <option value="oceanic-next">Oceanic</option>
          <option value="rubyblue">Ruby Blue</option>
          <option value="solarized">Solarized</option>
        </Select>
        <ColorSelection
          value={projectColor}
          onChange={(e) => handleChangeColor(e.target.value)}
        />
      </LanguageAndColorContainer>
      <Button filled onClick={handleSaveProject}>
        {loading ? (
          <img src="/icons/loading.svg" alt="Carregando" />
        ) : (
          'Salvar Projeto'
        )}
      </Button>
      <Button outlined onClick={exportJPG}>
        Exportar como JPG
      </Button>
    </ProjectOptionsContainer>
  );
};

export default ProjectOptions;
