import React from 'react'

const MemberForm = (props) =>{
    const {formInfo, update, submit} = props

    // onclick function that updates the form
    const onSubmit = (event) => {
        event.preventDefault()
        submit()
    }

    //function that prevent default on submit
    const onChange = (event) => {
        const {name, value} = event.target
        update(name, value)
    }

    return (
        <form onSubmit={onSubmit}>
            <button disabled={!formInfo.name || !formInfo.email || !formInfo.role ? true: false}>Submit</button>
            <label>Full Name:&nbsp;
                <input 
                    value={formInfo.name}
                    onChange={onChange}
                    name="name"
                    placeholder="Full Name"
                    maxLength="20"
                    type="text"
                    >
                </input>
            </label>
            <label>Email:&nbsp;
                <input 
                    value={formInfo.email}
                    onChange={onChange}
                    name="email"
                    placeholder="Email"
                    maxLength="30"
                    type="email"
                    >
                </input>
            </label>
            <label>Role:&nbsp;
                <select 
                    value={formInfo.role}
                    onChange={onChange}
                    name="role"
                    >
                    <option value="">Select Role</option>
                    <option value="uI_UX">UI/ UX</option>
                    <option value="front_End">Front End</option>
                    <option value="backend">Backend</option>
                    <option value="iOS">IOS</option>
                    <option value="data_Science">Data Science</option>
                </select>
            </label>
        </form >
    )
}

export default MemberForm