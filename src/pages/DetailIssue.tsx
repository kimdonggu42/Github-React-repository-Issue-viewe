import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailIssue() {
  const location = useLocation();
  const issue = location.state.issue;

  console.log(issue);

  return <div>test</div>;
}

export default DetailIssue;
