import React from 'react';
import { signIn } from 'next-auth/client';
import { Modal, Overlay } from './loginModal-styles';
import Button from '../Button';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import useAuthContext from '../../../pages/contexts/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginModal = () => {
  const { openModal, handleOpenModal } = useAuthContext();

  return (
    <>
      {openModal && (
        <Modal>
          <h2>Login</h2>
          <p>
            Faça login com o Github e salve seus projetos, curta e comente os
            códigos de nossa comunidade!
          </p>
          <Button filled onClick={() => signIn('github')}>
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="fab fa-github-square fa-2x"
              style={{ marginRight: '1rem' }}
            />
            Login com Github
          </Button>
        </Modal>
      )}

      <Overlay
        className={openModal && 'overlay-visible'}
        onClick={handleOpenModal}
      />
    </>
  );
};

export default LoginModal;
