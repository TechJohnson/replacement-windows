import React from "react"

const Button = (props) => {

    return (
        <button className='btn'>
            {props.buttonText}
        </button>
    )

}

export default Button