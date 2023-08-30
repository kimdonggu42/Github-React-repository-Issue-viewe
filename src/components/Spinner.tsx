import React from 'react';
import styled from 'styled-components';
import spinner from '../assets/images/spinner.gif';

function Spinner() {
  return (
    <SpinnerContainer>
      <img src={spinner} alt="spinner" />
    </SpinnerContainer>
  );
}

export default Spinner;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
