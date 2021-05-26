import { createContext, useContext, useState } from 'react';

const CodeEditorContext = createContext({});

export function CodeEditorContextProvider({ children }) {
  const [projectColor, setProjectColor] = useState('#6BD1FF');
  const [projectTheme, setProjectTheme] = useState('dracula');
  const [language, setLanguage] = useState('javascript');
  const [inputCode, setInputCode] = useState('');

  function handleChangeColor(newColor) {
    setProjectColor(newColor);
  }

  return (
    <CodeEditorContext.Provider
      value={{
        projectColor,
        language,
        inputCode,
        projectTheme,
        setProjectColor,
        handleChangeColor,
        setLanguage,
        setInputCode,
        setProjectTheme,
      }}
    >
      {children}
    </CodeEditorContext.Provider>
  );
}

export const useCodeEditorContext = () => useContext(CodeEditorContext);
