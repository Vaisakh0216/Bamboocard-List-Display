import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledSpan = styled.span`
  padding: 20px;
  border-radius: 5px;
  color: white;
  font-size: 26px;
  font-weight: 600;
  transition: all 0.3s ease;
  animation: popUp 0.3s ease-in-out forwards;

  @keyframes popUp {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Career = () => {
  return (
    <Container>
      <StyledSpan>Careers</StyledSpan>
    </Container>
  );
};

export default Career;
