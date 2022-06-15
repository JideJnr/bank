import React from 'react'
import {useLocation} from 'react-router-dom'

function Go() {
    const location = useLocation()
    const {from} = location.state
  return (
    <div>
        <p>
            {from}

        </p>
    </div>
  )
}

export default Go