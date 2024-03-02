import React from 'react'
import "../Styles/style.css"

const AdvicePageComponent = (props) => {
  return (
    <div>
        <h4>Advice #{props.ID}</h4>
        <h1>"{props.Advice}"</h1>
    </div>
  )
}

export default AdvicePageComponent