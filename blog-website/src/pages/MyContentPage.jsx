import MyContent from "../components/mycontent/MyContent";
import React from 'react'

const MyContentPage = ({isSign, id,token, myData, setMyData}) => {
  return (
    <>
    <MyContent isSign={isSign} id={id} token={token} myData={myData} setMyData={setMyData}/>
    </>
  )
}

export default MyContentPage