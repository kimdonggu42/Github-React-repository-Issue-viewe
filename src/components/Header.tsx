import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return <IssueHeader>facebook / react</IssueHeader>;
}

const IssueHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 2rem;
  margin-bottom: 2.5rem;
`;
