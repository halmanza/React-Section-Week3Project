import React,{useState} from 'react'

const CreatePost = ({authorData}) => {
    const [createAuthor,setCreateAuthor]= useState({
        createdAuthor: authorData,
        createdContent:''
    });

    const authorContent=(e)=>{
        if(e.target.value !== ''){
            console.log(createAuthor)
            setCreateAuthor({...createAuthor, createdContent: e.target.value});
        }
    }
    return (
        <div>
           
                <label htmlFor="authorContent">Author Name: {authorData} </label>
                <input type="text" name="authorContent" onChange={authorContent} />
        </div>
    )
}

export default CreatePost;
