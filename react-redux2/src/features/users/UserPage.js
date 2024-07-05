import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { selectUserById } from './usersSlice'

const UserPage = () => {


    const {userId} = useParams()
    const user = useSelector(state => selectUserById(state ,Number(userId)))

    


  return (
    <div>
      
    </div>
  )
}

export default UserPage
