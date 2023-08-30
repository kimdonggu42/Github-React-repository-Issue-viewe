import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { convertDateFormat } from '../utils/convertDateFormat';
import ReactMarkdown from 'react-markdown';

export default function DetailIssue() {
  const location = useLocation();
  const issue = location.state.issue;
  const convertDate = convertDateFormat(issue.created_at);

  // console.log(issue);

  return (
    <>
      <DetailIssueInfoHeader>
        <Author src={issue.user.avatar_url} alt="author" />
        <IssueItemWrap>
          <InfoArea>
            <TitleArea>
              <div>#{issue.number}</div>
              <IssueTitle>{issue.title}</IssueTitle>
            </TitleArea>
            <DateArea>
              <div>작성자: {issue.user.login},</div>
              <div>작성일: {convertDate}</div>
            </DateArea>
          </InfoArea>
          <CommetArea>코멘트: {issue.comments}</CommetArea>
        </IssueItemWrap>
      </DetailIssueInfoHeader>
      <DetailIssueBody>{issue.body}</DetailIssueBody>
    </>
  );
}

const DetailIssueInfoHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 2rem;

  /* border: 1px solid red; */
`;

const Author = styled.img`
  width: 3rem;
  border-radius: 10rem;
  height: auto;
`;

const IssueItemWrap = styled.div`
  display: flex;
  column-gap: 0.4rem;
  max-width: calc(100% - 4rem);
  padding: 1rem 0.4rem;
  border-bottom: 1px solid black;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  width: calc(100% - 0.4rem - 5rem);

  /* border: 1px solid red; */
`;

const TitleArea = styled.div`
  display: flex;
  column-gap: 0.2rem;
  font-size: 1rem;
`;

const IssueTitle = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DateArea = styled.div`
  display: flex;
  column-gap: 0.2rem;
  font-size: 0.8rem;
`;

const CommetArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  font-size: 0.8rem;

  /* border: 1px solid red; */
`;

const DetailIssueBody = styled(ReactMarkdown)`
  font-size: 1rem;

  & img,
  code {
    max-width: 100%;
  }
`;
