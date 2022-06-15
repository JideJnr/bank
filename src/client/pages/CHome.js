import React, { useContext } from 'react'
 import Main from './../../pages/Main'
 import ClientDashboard from '../component/ClientDashboard'

 import {AuthContext} from './../../context/auth'

function CHome() {
    const {user} = useContext(AuthContext);
  return (
    <div>{user ?

        <> <ClientDashboard/></> :
        <><Main/></>
        
        }</div>
  )
}

export default CHome
