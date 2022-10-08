import React from 'react'

function PrivateRoutes(children) {
    const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
    console.log(isAuth)
  return (
    <div>
      
    </div>
  )
}

export default PrivateRoutes
