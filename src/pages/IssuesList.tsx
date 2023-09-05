import React, { Fragment } from 'react';
import styled from 'styled-components';
import IssueItem from '../components/IssueItem';
import { useGetIssues } from '../hooks/useGetIssues';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import wantedAd from '../assets/images/wanted_ad.png';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const AD_EXPOSE_INTERVAL = 4;

export default function IssueList() {
  const { issues, loading, page, getIssues } = useGetIssues();
  const { targetRef } = useInfiniteScroll(() => {
    getIssues();
  }, page.current);

  return (
    <ul>
      {issues.map((issue, index) => {
        const showAd = (index + 1) % AD_EXPOSE_INTERVAL === 0;
        return (
          <Fragment key={issue.id}>
            <IssueItem issue={issue} />
            {showAd && (
              <Link to="https://www.wanted.co.kr/">
                <Ad src={wantedAd} />
              </Link>
            )}
          </Fragment>
        );
      })}
      {loading ? <Spinner /> : <div ref={targetRef} />}
    </ul>
  );
}

const Ad = styled.img`
  display: flex;
  margin: auto;
  width: 50%;
  height: auto;
`;
