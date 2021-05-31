import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

const CodeEditorContext = createContext({});

export function CodeEditorContextProvider({ children }) {
  const router = useRouter();
  const [projectColor, setProjectColor] = useState('#6BD1FF');
  const [projectTheme, setProjectTheme] = useState('dracula');
  const [language, setLanguage] = useState('javascript');
  const [inputCode, setInputCode] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const [loading, setLoading] = useState(false);

  function handleChangeColor(newColor) {
    setProjectColor(newColor);
  }

  // Essa função deverá ser alterada futuramente para incluir dados do autor do projeto
  async function handleSaveProject() {
    setLoading(true);
    const projectInfo = {
      projectColor,
      projectTheme,
      language,
      inputCode,
      projectTitle,
      projectDescription,
    };

    const data = await fetch(`http://localhost:3000/api/saveProject`, {
      body: JSON.stringify(projectInfo),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const res = await data.json();
    console.log(res);
    setLoading(false);
    router.push('/community');
  }

  return (
    <CodeEditorContext.Provider
      value={{
        projectColor,
        language,
        inputCode,
        projectTheme,
        loading,
        setProjectColor,
        handleChangeColor,
        setLanguage,
        setInputCode,
        setProjectTheme,
        handleSaveProject,
        setProjectTitle,
        setProjectDescription,
      }}
    >
      {children}
    </CodeEditorContext.Provider>
  );
}

export const useCodeEditorContext = () => useContext(CodeEditorContext);
