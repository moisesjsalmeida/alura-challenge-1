import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Author,
  CommunityInfoContainer,
  InfoContainer,
} from './projectInfo-styles';
import Like from '../../../../layouts/components/Like';

function ProjectInfo({
  projectId,
  projectTitle,
  projectDescription,
  projectAuthor,
  projectAuthorAvatar,
  projectLink,
  projectComments,
  projectLikes,
}) {
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    if (typeof projectComments !== 'undefined') {
      setCommentCount(projectComments.length);
    }
  }, []);

  return (
    <InfoContainer>
      <Link href={`community/projects/${projectLink}`}>
        <a>
          <h3>{projectTitle}</h3>
        </a>
      </Link>
      <p>{projectDescription}</p>

      <CommunityInfoContainer>
        <Link href={`community/projects/${projectLink}/#comments`}>
          <span className="action-item">
            <svg
              className="commentIcon"
              role="button"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.25C4.47656 0.25 0 3.88672 0 8.375C0 10.3125 0.835938 12.0859 2.22656 13.4805C1.73828 15.4492 0.105469 17.2031 0.0859375 17.2227C0 17.3125 -0.0234375 17.4453 0.0273438 17.5625C0.078125 17.6797 0.1875 17.75 0.3125 17.75C2.90234 17.75 4.84375 16.5078 5.80469 15.7422C7.08203 16.2227 8.5 16.5 10 16.5C15.5234 16.5 20 12.8633 20 8.375C20 3.88672 15.5234 0.25 10 0.25Z"
                fill="white"
              />
            </svg>
            <span>{commentCount}</span>
          </span>
        </Link>

        <span className="action-item">
          <Like projectId={projectId} projectLikes={projectLikes} />
        </span>
        <Author>
          <img src={projectAuthorAvatar} alt="Avatar" />
          <span>{projectAuthor}</span>
        </Author>
      </CommunityInfoContainer>
    </InfoContainer>
  );
}

export default ProjectInfo;
