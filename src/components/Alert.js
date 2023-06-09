import React from 'react'

const Alert = (props) => {
    const capitalize=(word)=>{
        const lower = word.toLowerCase()
return lower[0].toUpperCase() + lower.slice(1); 

    }
  return (
    <div>
      
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong> {capitalize(props.alert.type) } : {props.alert.msg} </strong>

</div> }

    </div>
  )
}

export default Alert
