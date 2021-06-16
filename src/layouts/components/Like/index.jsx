import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import useAuthContext from '../../../hooks/authContext';
import LikeButton, { LikeContainer } from './like-styles';

const Like = ({ projectId, projectLikes, contained }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [session] = useSession();
  const { handleOpenModal } = useAuthContext();

  useEffect(() => {
    if (typeof (projectLikes !== 'undefined') && session) {
      setLikeCount(projectLikes.length);
      if (projectLikes.includes(session.id)) {
        setLiked(true);
      }
    }
  }, []);

  async function handleLikeClick() {
    if (!session) {
      handleOpenModal();
      setLoading(false);
      return;
    }

    setLiked(!liked);
    if (!liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }

    try {
      const user = session.id;
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/saveLikes`,
        {
          body: JSON.stringify({ projectId, user, liked }),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
        }
      );
    } catch (e) {
      console.log(e);
      store.addNotification({
        title: 'Erro',
        message: 'Ocorreu um erro em nosso servidor',
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
  }

  return (
    <>
      {contained ? (
        <LikeContainer>
          <>
            <LikeButton
              onClick={handleLikeClick}
              liked={liked}
              role="button"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0587 1.44659C15.9181 -0.377597 12.7346 -0.0494787 10.7698 1.97783L10.0003 2.77078L9.23077 1.97783C7.26987 -0.0494787 4.08243 -0.377597 1.94185 1.44659C-0.51123 3.5403 -0.640134 7.29804 1.55514 9.56752L9.11359 17.3721C9.60186 17.876 10.3948 17.876 10.8831 17.3721L18.4415 9.56752C20.6407 7.29804 20.5118 3.5403 18.0587 1.44659Z"
                fill="white"
              />
            </LikeButton>
            <span>{likeCount}</span>
          </>
        </LikeContainer>
      ) : (
        <>
          <LikeButton
            onClick={handleLikeClick}
            liked={liked}
            role="button"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.0587 1.44659C15.9181 -0.377597 12.7346 -0.0494787 10.7698 1.97783L10.0003 2.77078L9.23077 1.97783C7.26987 -0.0494787 4.08243 -0.377597 1.94185 1.44659C-0.51123 3.5403 -0.640134 7.29804 1.55514 9.56752L9.11359 17.3721C9.60186 17.876 10.3948 17.876 10.8831 17.3721L18.4415 9.56752C20.6407 7.29804 20.5118 3.5403 18.0587 1.44659Z"
              fill="white"
            />
          </LikeButton>
          <span>{likeCount}</span>
        </>
      )}
    </>
  );
};

export default Like;
