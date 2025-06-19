import Header from "../header/Header";
import Articles from "../articles/Articles";
import React, { useEffect, useState } from 'react'
import axiosUrl from "../../api/axiosUrl";
import MyArticle from "../myarticle.jsx/MyArticle";
const MyContent = ({isSign, id, token, setMyData, myData}) => {
    
    useEffect(()=>{
        const fetchMyData=async()=>{
        
        const res=await axiosUrl.get(`/myblog/${id}`,
            {headers:{'Authorization':`Bearer ${token}`}}
        );
        let data=  await res.data;
        setMyData(data);
        console.log(data);
        
    }
    setTimeout(()=>fetchMyData(),500);
    
    },[])
    
    return (
    <>
    <Header isSign={isSign} />
    <MyArticle myData={myData}/>
    </>
  )
}

export default MyContent