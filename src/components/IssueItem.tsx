import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { convertDateFormat } from '../utils/convertDateFormat';
import { IssueProps } from '../utils/type';

export default function IssueItem({ issue }: IssueProps) {
  const navigate = useNavigate();
  const convertDate = convertDateFormat(issue.created_at);

  const moveDetailPage = () => {
    navigate(`/issues/${issue.id}`, {
      state: {
        issue,
      },
    });
  };

  return (
    <IssueItemWrap onClick={moveDetailPage}>
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
  );
}

const IssueItemWrap = styled.li`
  display: flex;
  column-gap: 0.4rem;
  padding: 1rem 0.4rem;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  width: calc(100% - 0.4rem - 5rem);
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
`;
