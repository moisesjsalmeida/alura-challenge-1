import React, { useState, useRef } from 'react';
import { useSession } from 'next-auth/client';
import { store } from 'react-notifications-component';
import CommentInputContainer from './styles.js';
import TextArea from '../../TextArea';
import Button from '../../Button';
import useAuthContext from '../../../../hooks/authContext.js';

const CommentInput = ({ projectId, setHasNew }) => {
  const [loading, setLoading] = useState(false);
  const [session] = useSession();
  const commentRef = useRef(null);

  const { handleOpenModal } = useAuthContext();

  async function handleCommentSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (!session) {
      handleOpenModal();
      setLoading(false);
      return;
    }

    const newComment = e.target[0].value;

    if (newComment.length === 0) {
      store.addNotification({
        title: 'Ops!',
        message: 'Seu comentário precisa de um texto!',
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

    const commentInfo = {
      newComment,
      projectId,
      user: session.id,
      userName: session.user.name,
      userAvatar: session.user.image,
    };

    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/saveComment`,
        {
          body: JSON.stringify(commentInfo),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
        }
      );

      const res = await data.json();
      console.log(res);
      store.addNotification({
        title: 'Sucesso!',
        message: 'Comentário enviado!',
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
      commentRef.current.value = '';
    } catch (e) {
      console.log(e);
      store.addNotification({
        title: 'Erro',
        message: 'Ocorreu um erro ao enviar comentário.',
        type: 'danger',
        insert: 'bottom',
        container: 'bottom-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    }

    setLoading(false);
    setHasNew(true);
    return;
  }

  return (
    <CommentInputContainer onSubmit={handleCommentSubmit}>
      <TextArea
        width="79%"
        placeholder="Envie seu comentário!"
        rows={4}
        name="commentText"
        ref={commentRef}
      />
      <Button outlined width="19%">
        {loading ? <img src="/icons/loading.svg" alt="Carregando" /> : 'Enviar'}
      </Button>
    </CommentInputContainer>
  );
};

export default CommentInput;
