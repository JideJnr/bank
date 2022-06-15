import React from "react";
import PopupText from './popup/PopupText'
import LoginInformation from './login/LoginInformation'
import ProfileDetails from "./profileDetails/ProfileDetails";


const ClientProfile = ({client}) => {

  return (
    <div className="w-screen h-screen bg ">
      
           
        <ProfileDetails client = {client} />
        
        <PopupText client = {client}/>

        <LoginInformation client = {client}/>
      
      
       


    </div>
  )
}

export default ClientProfile