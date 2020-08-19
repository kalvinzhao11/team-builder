import React from 'react'

const Form = (props) =>{
    const  {member}  = props
    return (
        <div>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
        </div>
    )
}

export default Form