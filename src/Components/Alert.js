import React from 'react'

export default function Alert(props) {
  return (
 props.alert && <div className="alert alert-primary alert-dismissible fade show" role="alert">
{props.alert.message}
  
  
</div>

  )
}
