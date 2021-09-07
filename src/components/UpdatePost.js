import React, { useState, useEffect } from "react";

const UpdatePost = ({ postToBeUpdated }) => {
  const [postdata, setPostData] = {
    username: "",
    content: "",
    date: "",
  };

  const updatedData = (e) => {
    if (e.target.value != "") {
      setPostData({
        username: postToBeUpdated.username,
        content: e.target.value,
        date: new Date(),
      });
    }
  };

  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default UpdatePost;
