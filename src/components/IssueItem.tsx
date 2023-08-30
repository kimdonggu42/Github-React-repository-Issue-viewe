import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { convertDateFormat } from '../utils/convertDateFormat';

export default function IssueItem({ issue }: any) {
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
          <div>{issue.number}</div>
          <div>{issue.title}</div>
        </TitleArea>
        <DateArea>
          <div>작성자: {issue.user.login}</div>
          <div>작성일: {convertDate}</div>
        </DateArea>
      </InfoArea>
      <CommetArea>코멘트: {issue.comments}</CommetArea>
    </IssueItemWrap>
  );
}

const IssueItemWrap = styled.li`
  display: flex;
  border: 1px solid red;
`;

const InfoArea = styled.div`
  width: 80%;

  border: 1px solid blue;
`;

const TitleArea = styled.div`
  display: flex;
`;

const DateArea = styled.div`
  display: flex;
`;

const CommetArea = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  font-size: 0.9rem;
`;
