import React, { useState, useEffect } from "react";

import ApiFetcher from "./ApiFetcher";
import CreatePost from "./CreatePost";

const UserForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
  });
  const [userName, setUserName] = useState("");

  const [submitCheck, setSubmitCheck] = useState(false);
  const [createCheck, setCreateCheck] = useState(false);
  const [resetArrayStorage, setResetArrayStorage] = useState(false);

  const getuser = (e) => {
    if (e.target.value !== "") {
      setUserInfo({ name: e.target.value });
    }
  };

  const sendData = () => {
    setSubmitCheck(true);
  };

  const checkIfReady = () => {
    sendData();
    setUserName(userInfo.name);
  };

  const checkCreate = () => {
    setCreateCheck(true);
  };

  const refreshValues = () => {
    setSubmitCheck(false);
    setUserName("");
    setCreateCheck(false);
    setUserInfo({ name: "" });
    setResetArrayStorage(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setResetArrayStorage(false);
    }, 3000);
  }, [resetArrayStorage]);

  const displayAuthorCreateForm = () => {
    if (createCheck === true) {
      return <CreatePost authorData={userInfo.name} />;
    }
  };

  return (
    <div>
      <p>You can search for an author or create your own with some content</p>
      <label htmlFor="author">Enter Author's Name here</label>
      <br />
      <input
        type="text"
        placeholder="Author's name"
        onChange={getuser}
        value={userInfo.name}
        name="author"
      />
      <br />
      <button onClick={checkIfReady}>Find Author</button>
      <button onClick={checkCreate}>Create an Author</button>
      <button onClick={refreshValues}>Reset</button>

      <ApiFetcher useInfoName={userName} resetInfo={resetArrayStorage} />
      {displayAuthorCreateForm()}
    </div>
  );
};

export default UserForm;
