import React from 'react';
import IssueItem from '../components/IssueItem';
import { useGetIssues } from '../hooks/useGetIssues';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

function IssueList() {
  const { issues, loading, page, getIssues } = useGetIssues();
  const { targetRef } = useInfiniteScroll(() => {
    getIssues();
  }, page);

  return (
    <div>
      {issues.map((value: any) => {
        return <IssueItem key={value.id} list={value} />;
      })}
      {loading ? 'Loading...' : <div ref={targetRef}>Ref</div>}
    </div>
  );
}

export default IssueList;
