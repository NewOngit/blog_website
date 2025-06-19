import Signin from "../components/signin/Signin";



import React from 'react'

const SigninPage = ({setId, setAuthor, setToken, setIsSign}) => {
  return (
    <>
    <Signin setAuthor={setAuthor} setId={setId} setToken={setToken} setIsSign={setIsSign}/></>
  )
}

export default SigninPage