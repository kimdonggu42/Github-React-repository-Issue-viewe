import React, { Fragment } from 'react';
import IssueItem from '../components/IssueItem';
import { useGetIssues } from '../hooks/useGetIssues';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import wantedAd from '../assets/images/wanted_ad.png';

function IssueList() {
  const { issues, loading, page, getIssues } = useGetIssues();
  const { targetRef } = useInfiniteScroll(() => {
    getIssues();
  }, page);

  console.log(issues);

  return (
    <div>
      {issues.map((issue: any, index: number) => {
        const showAd = (index + 1) % 4 === 0;
        return (
          <Fragment key={issue.id}>
            <IssueItem issue={issue} />
            {showAd && <img src={wantedAd} width={100} />}
          </Fragment>
        );
      })}
      {loading ? 'Loading...' : <div ref={targetRef}>Ref</div>}
    </div>
  );
}

export default IssueList;
