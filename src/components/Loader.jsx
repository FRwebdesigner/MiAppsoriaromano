import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div style={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
          <ClimbingBoxLoader color='grey' size={100} />
    </div>
  )
}

export default Loader