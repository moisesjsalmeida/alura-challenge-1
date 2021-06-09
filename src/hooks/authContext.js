import { createContext, useContext, useState } from 'react';
import { useSession } from 'next-auth/client';

const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);

  const [session, loading] = useSession();

  function handleOpenModal() {
    if (session) return;
    setOpenModal(!openModal);
  }

  return (
    <AuthContext.Provider
      value={{
        openModal,
        handleOpenModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
