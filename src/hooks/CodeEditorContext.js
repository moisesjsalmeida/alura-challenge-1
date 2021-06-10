import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import * as htmlToImage from 'html-to-image';
import { useSession } from 'next-auth/client';
import useAuthContext from './authContext';
import { store } from 'react-notifications-component';

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
  const { handleOpenModal } = useAuthContext();

  function handleChangeColor(newColor) {
    setProjectColor(newColor);
  }

  async function handleSaveProject() {
    setLoading(true);

    if (!session) {
      handleOpenModal();
      setLoading(false);
      return;
    }

    if (inputCode.length < 3) {
      store.addNotification({
        title: 'Ops!',
        message: 'Seu projeto precisa de mais código!',
        type: 'warning',
        insert: 'bottom',
        container: 'bottom-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
      setLoading(false);
      return;
    }
    if (projectTitle.length === 0) {
      store.addNotification({
        title: 'Ops!',
        message: 'Seu projeto precisa de um título!',
        type: 'warning',
        insert: 'bottom',
        container: 'bottom-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
      setLoading(false);
      return;
    }
    if (projectDescription.length === 0) {
      store.addNotification({
        title: 'Ops!',
        message: 'Seu projeto precisa de uma descrição!',
        type: 'warning',
        insert: 'bottom',
        container: 'bottom-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
      setLoading(false);
      return;
    }

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

    const data = await fetch(
      `https://alura-challenge-1-kappa.vercel.app/api/saveProject`,
      {
        body: JSON.stringify(projectInfo),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      }
    );

    const res = await data.json();
    console.log(res);
    store.addNotification({
      title: 'Sucesso!',
      message: 'Seu projeto foi salvo e está disponível em nossa comunidade',
      type: 'success',
      insert: 'bottom',
      container: 'bottom-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
    setLoading(false);
    router.push('/community');
    return;
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

const useCodeEditorContext = () => useContext(CodeEditorContext);

export default useCodeEditorContext;
