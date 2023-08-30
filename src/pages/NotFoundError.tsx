import React from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

export default function NotFoundError() {
  // const navigate = useNavigate();

  // const prevPage = () => {
  //   navigate(-1);
  // };

  return (
    <NotFoundContainer>
      <ErrorStateText>
        <ErrorStatus>404</ErrorStatus>
        <ErrorText>페이지를 찾을 수 없습니다.</ErrorText>
      </ErrorStateText>
      {/* <PrevPagebutton>이전 페이지로 돌아가기</PrevPagebutton> */}
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorStateText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  font-weight: bolder;
`;

const ErrorStatus = styled.div`
  font-size: 4rem;
`;

const ErrorText = styled.div`
  font-size: 2rem;
`;

// const PrevPagebutton = styled.button`
//   width: 90vw;
//   max-width: 250px;
//   height: 60px;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   font-size: 17px;
//   font-weight: 600;
//   background-color: #576cbc;

//   &:hover {
//     opacity: 0.8;
//   }
// `;
