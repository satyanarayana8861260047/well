import React from 'react';
import { Fade } from 'react-awesome-reveal'

const SubmitForm = () => {
    const myStyle={
        top:"50%",
        left:"50%",
        position:"absolute",
        transform:"translate(-50%,-50%)",
        textAlign:"center",
        color:"#ffffff",
        fontSize:"25px",
        fontWeight:"bold",
        textShadow:"3px 3px 3px #000"
    }


  return (
    <Fade dalay={500}>
        <div style={myStyle}>
            <h1>welcome</h1>
        <p>you are logged in</p>
        </div>
        </Fade>
  )
}

export default SubmitForm