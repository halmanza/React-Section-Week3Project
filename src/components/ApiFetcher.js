import React, { useState, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
  border: 5px dashed grey;
  max-width: 100%;
  max-height: 100%;
  margin: 1rem;
`;
const ApiFetcher = ({ useInfoName, resetInfo }) => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    selectedName: "",
    selectedContent: "",
    selectedDate: "",
    uniqueId: 0,
  });

  const [allSelectedAuthor, setAllSelectedAuthor] = useState([]);

  const deleteListener = useRef();
  const deleteOthers = useRef();

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

    userData.map((item) => {
      if (item.username === useInfoName) {
        setAllSelectedAuthor((old) => [...old, item]);
      }
    });
  };

  const formattedData = () => {
    if (selectedUser.uniqueId !== undefined) {
      return (
        <div
          ref={deleteListener}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <li
            ref={deleteListener}
            style={{ listStyle: "none", padding: ".5rem" }}
            key={selectedUser.uniqueId}
          >
            <h4>{selectedUser.selectedName}</h4>
            <p>{selectedUser.selectedContent}</p>
            <small>Created: {selectedUser.selectedDate}</small>
            <button onClick={deleteEntry}>delete</button>
            <button>update</button>
          </li>
          <h6>All posts</h6>

          <ul style={{ display: "flex", flexDirection: "column" }}>
            {allSelectedAuthor.slice(1).map((item) => {
              return (
                <li
                  ref={deleteOthers}
                  style={{ listStyle: "none", margin: ".2rem" }}
                  key={item._id}
                >
                  {item.content} : created {item.date} , author: {item.username}
                  <button>delete</button>
                </li>
              );
            })}
          </ul>
          {console.log(allSelectedAuthor)}
        </div>
      );
    }
    if (selectedUser.uniqueId !== null) {
      return <h3>User Data will appear here.</h3>;
    }
  };

  const deleteEntry = async () => {
    try {
      await fetch(
        `https://crudcrud.com/api/de79fc870fce45308001aa8b6887ef3e/userPost/${selectedUser.uniqueId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      setSelectedUser({
        selectedName: "",
        selectedContent: "",
        selectedDate: "",
        uniqueId: "",
      });
      deleteListener.current.remove();

      console.log(deleteListener.current);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteOtherPosts = async (item) => {
    const response = await fetch(
      `https://crudcrud.com/api/de79fc870fce45308001aa8b6887ef3e/userPost/${item._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    console.log("Deleted!");
    deleteOthers.current.remove();
  };

  useEffect(() => {
    getuserData();
  }, [useInfoName]);

  useEffect(() => {
    if (resetInfo === true) {
      setAllSelectedAuthor([]);
    }
  }, [resetInfo]);

  useMemo(() => {
    getCorrectUser();
    formattedData();
  }, [userData]);

  return <Contain>{formattedData()}</Contain>;
};

export default ApiFetcher;
