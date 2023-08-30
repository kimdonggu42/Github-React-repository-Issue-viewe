import React, { Fragment } from 'react';
import styled from 'styled-components';
import IssueItem from '../components/IssueItem';
import { useGetIssues } from '../hooks/useGetIssues';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import wantedAd from '../assets/images/wanted_ad.png';

export default function IssueList() {
  const { issues, loading, page, getIssues } = useGetIssues();
  const { targetRef } = useInfiniteScroll(() => {
    getIssues();
  }, page);

  console.log(issues);

  return (
    <ul>
      {issues.map((issue: any, index: number) => {
        const showAd = (index + 1) % 4 === 0;
        return (
          <Fragment key={issue.id}>
            <IssueItem issue={issue} />
            {showAd && <Ad src={wantedAd} />}
          </Fragment>
        );
      })}
      {loading ? 'Loading...' : <div ref={targetRef}>Ref</div>}
    </ul>
  );
}

const Ad = styled.img`
  width: 100%;
  height: auto;
`;
