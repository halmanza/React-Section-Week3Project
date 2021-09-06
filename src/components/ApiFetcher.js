import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
  max-width: 100%;
  text-align: center;
`;
const ApiFetcher = ({ useInfoName }) => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    selectedName: "",
    selectedContent: "",
    selectedDate: "",
    uniqueId: 0,
  });

  const getuserData = async () => {
    const data = await fetch(
      "https://crudcrud.com/api/de79fc870fce45308001aa8b6887ef3e/userPost"
    );
    const finaldata = await data.json();
    setUserData(finaldata);
  };

  const getCorrectUser = () => {
    const searchedUser = userData.filter((item) => {
      return item.username === useInfoName;
    });
    const searchedUsername = searchedUser[0]?.username;
    const searchedTimestamp = searchedUser[0]?.date;
    const searchedContent = searchedUser[0]?.content;
    const searchedId = searchedUser[0]?._id;
    setSelectedUser({
      selectedName: searchedUsername,
      selectedContent: searchedContent,
      selectedDate: searchedTimestamp,
      uniqueId: searchedId,
    });
    console.log(selectedUser);
  };

  const formattedData = () => {
    if (selectedUser.uniqueId !== undefined) {
      return (
        <li style={{ listStyle: "none" }} key={selectedUser.uniqueId}>
          <h4>{selectedUser.selectedName}</h4>
          <p>{selectedUser.selectedContent}</p>
          <small>Created: {selectedUser.selectedDate}</small>
        </li>
      );
    }
  };

  useEffect(() => {
    getuserData();
  }, [useInfoName]);

  useMemo(() => {
    getCorrectUser();
  }, [userData]);

  return <Contain>{formattedData()}</Contain>;
};

export default ApiFetcher;
