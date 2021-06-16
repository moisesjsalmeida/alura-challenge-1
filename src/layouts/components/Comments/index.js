import React, { useState, useEffect } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { CommentsSection } from './comments-styles';

const Comments = ({ projectId, comments }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(comments);
  }, []);

  return (
    <CommentsSection>
      <h4>COMENTÁRIOS</h4>
      <CommentInput
        projectId={projectId}
        setContent={setContent}
        content={content}
      />
      <CommentList comments={content} />
    </CommentsSection>
  );
};

export default Comments;
