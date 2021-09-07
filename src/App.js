import styled from "styled-components";
import UserInterface from "./components/UserInterface";
import React from "react";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

function App() {
  return (
    <MainContainer>
      <UserInterface />
    </MainContainer>
  );
}

export default App;
