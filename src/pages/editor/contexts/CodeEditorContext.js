import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import * as htmlToImage from 'html-to-image';
import { useSession } from 'next-auth/client';

const CodeEditorContext = createContext({});

export function CodeEditorContextProvider({ children }) {
  const router = useRouter();
  const [projectColor, setProjectColor] = useState('#6BD1FF');
  const [projectTheme, setProjectTheme] = useState('dracula');
  const [language, setLanguage] = useState('javascript');
  const [inputCode, setInputCode] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectToExport, setProjectToExport] = useState(null);

  const [loading, setLoading] = useState(false);

  const [session] = useSession();

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
      user: session.user._id,
      userName: session.user.name,
      userAvatar: session.user.image,
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

  function exportJPG() {
    htmlToImage.toJpeg(projectToExport).then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'meu-projeto.jpeg';
      link.href = dataUrl;
      link.click();
    });
  }

  return (
    <CodeEditorContext.Provider
      value={{
        projectColor,
        language,
        inputCode,
        projectTheme,
        loading,
        projectToExport,
        setProjectColor,
        handleChangeColor,
        setLanguage,
        setInputCode,
        setProjectTheme,
        handleSaveProject,
        setProjectTitle,
        setProjectDescription,
        setProjectToExport,
        exportJPG,
      }}
    >
      {children}
    </CodeEditorContext.Provider>
  );
}

export const useCodeEditorContext = () => useContext(CodeEditorContext);
