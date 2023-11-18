import React from 'react'

function User(props) {
    console.log(props)
  return (
    <div>{props.name}</div>
  )
}

export default User