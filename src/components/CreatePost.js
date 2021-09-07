import React, { useState } from "react";

const CreatePost = ({ authorData }) => {
  const [createAuthor, setCreateAuthor] = useState({
    createdAuthor: authorData,
    createdContent: "",
    createdData: "",
  });
  const [postSuccess, setPostSuccess] = useState(false);

  const authorContent = (e) => {
    if (e.target.value !== "") {
      console.log(createAuthor);
      setCreateAuthor({
        ...createAuthor,
        createdContent: e.target.value,
        createdData: new Date(),
      });
      console.log(createAuthor);
    }
  };
  const PostData = async () => {
    try {
      await fetch(
        "https://crudcrud.com/api/de79fc870fce45308001aa8b6887ef3e/userPost",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify({
            username: createAuthor.createdAuthor,
            content: createAuthor.createdContent,
            date: createAuthor.createdData,
          }),
        }
      );
      setPostSuccess(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Create An Entry for your preferred Author</h4>
      <label>Author Name: {authorData} </label>
      <br />
      <label htmlFor="authorContent">Content:</label>

      <input
        type="text"
        name="authorContent"
        placeholder="Enter your content here"
        onChange={authorContent}
      />
      <button onClick={PostData}>Create</button>
      {postSuccess === true ? (
        <h3>Entry Created! Please click reset before moving on.</h3>
      ) : null}
    </div>
  );
};

export default CreatePost;
