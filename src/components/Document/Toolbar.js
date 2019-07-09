import React from 'react'

const Toolbar = (props) => {
  return (
    <div className="document__toolbar">
      {props.children}
    </div>
  )
}

export default Toolbar