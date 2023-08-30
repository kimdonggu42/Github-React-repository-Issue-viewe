import React from 'react';
import { useNavigate } from 'react-router-dom';

function IssueItem({ issue }: any) {
  const navigate = useNavigate();

  const moveDetailPage = () => {
    navigate(`/issues/${issue.id}`, {
      state: {
        issue,
      },
    });
  };

  return <div onClick={moveDetailPage}>{issue.title}</div>;
}

export default IssueItem;
