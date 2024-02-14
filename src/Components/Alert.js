import React,{props} from 'react'

export default function Alert(props) {
    const Capitalize = (tex)=>{
        let newText = (props.alert.type).toLowerCase();
        return newText.charAt(0).toUpperCase() + newText.slice(1);
    }

  return (
    
       props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    
  )
}
