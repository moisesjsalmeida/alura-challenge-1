import React from 'react';
import {
  Comment,
  CommentHeader,
  CommentContent,
  EmptyComments,
} from './styles';

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment key={comment._id}>
            <CommentHeader>
              <img src={comment.userAvatar} alt="Avatar" />
              <span>
                {comment.userName} em{' '}
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </CommentHeader>
            <CommentContent>{comment.newComment}</CommentContent>
          </Comment>
        ))
      ) : (
        <EmptyComments>Não há comentários para este projeto.</EmptyComments>
      )}
    </>
  );
};

export default CommentList;
