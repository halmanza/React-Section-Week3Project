import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserForm from "./UserForm";
import Loader from "./Loader";

const UserInterface = () => {
  const [loadState, setLoadState] = useState(true);

  //User Interface here for interacting with CRUD options

  const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: beige;

    max-width: 1100%;
    width: 100vw;
    max-height: 110%;
    height: 100vh;
  `;
  const loadDisplay = () => {
    if (loadState === true) {
      return <Loader />;
    } else {
      return <UserForm />;
    }
  };
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoadState(false);
    }, 1000);
  }, [loadState]);
  return <MainDiv>{loadDisplay()}</MainDiv>;
};

export default UserInterface;
