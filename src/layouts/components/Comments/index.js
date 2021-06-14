import React, { useState } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { CommentsSection } from './comments-styles';

const Comments = ({ projectId, comments }) => {
  const [hasNewComment, setHasNewComment] = useState(false);

  return (
    <CommentsSection>
      <h4>COMENTÁRIOS</h4>
      <CommentInput projectId={projectId} setHasNew={setHasNewComment} />
      <CommentList
        comments={comments}
        hasNew={hasNewComment}
        setHasNew={setHasNewComment}
      />
    </CommentsSection>
  );
};

export default Comments;
