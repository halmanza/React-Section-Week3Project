import React, { useState } from "react";
import ApiFetcher from "./ApiFetcher";
import CreatePost from "./CreatePost";

const UserForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
  });
  const [userName,setUserName]=useState('');

  const [submitCheck, setSubmitCheck] = useState(false);
  const [createCheck,setCreateCheck]= useState(false);

  const getuser = (e) => {
    if (e.target.value !== "") {
      setUserInfo({ name: e.target.value });
    }
  };


  const sendData=()=>{
    
    if(submitCheck === true){
      setUserName(userInfo.name);
    }
}
  const checkIfReady = (e) => {
    
    setSubmitCheck(true);
    sendData();
    console.log(submitCheck)
  };

  const checkCreate=()=>{

      setCreateCheck(true);
  }

  const stopAction=(e)=>{
      e.preventDefault();
  }

  const displayAuthorCreateForm=()=>{
      if(createCheck === true){
        return <CreatePost/>
      }
  }

  return (
    <div>
        <p>You can search for an author or create your own with some content</p>
        <label htmlFor="author">Enter Author's Name here</label>
        <br />
        <input
          type="text"
          placeholder="Author's name"
          onChange={getuser}
          name="author"
        />
        <br />
        <button onClick={checkIfReady}>Find Author</button>
        <button onClick={checkCreate}>Create an Author</button>
      

      <ApiFetcher useInfoName={userName} />
      {displayAuthorCreateForm()}
    </div>
  );
};

export default UserForm;
