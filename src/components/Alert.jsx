import React from 'react'

export default function Alert(props) {
    return (
            props.alertText && <div className={`alert alert-${props.alertText.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alertText.type}</strong>: {props.alertText.message}
            </div>
    )
}
