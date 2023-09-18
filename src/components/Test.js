import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function Test() {
    const location = useLocation();
    const { user } = location.state;

  return (
    <div>
      <h5 className='mt-2'><b>Name:</b>{user.name}</h5>
      <div><b>Company Name:</b> {user.company.name}</div>
      <div><b>Email:</b> {user.email}</div>
      <div><b>Website:</b> {user.website}</div>
      <div><b>Phone:</b> {user.phone}</div>
      <Link to="/">Back</Link>
    </div>
  )
}

export default Test
