import React from 'react'
import styled from 'styled-components'
import UserForm from './UserForm'


const UserInterface = () => {

    //User Interface here for interacting with CRUD options

     const MainDiv= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: lightgrey;
    
    margin-top:.5rem;
    width:98vw;
    height:98vh;
    max-width:100%;
    max-height:100%;
    

    `
    return (
        <MainDiv>
         <UserForm/>
           
        </MainDiv>
    )
}

export default UserInterface
