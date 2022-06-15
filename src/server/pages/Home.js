import React, { useContext } from 'react'
 import Main from '../../pages/Main'
 import Server from './Server'
 import {AuthContext} from '../../context/auth'

function Home() {
    const {user} = useContext(AuthContext);
  return (
    <div>{user ?

        <> 
        <Server/>
        
        </> :
        <><Main/></>
        
        }</div>
  )
}

export default Home