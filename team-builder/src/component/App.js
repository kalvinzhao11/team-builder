import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import Form from './Form'
import MemberForm from './MemberForm'

// import './App.css';

function App() {
  // initial team member list
  const teamMemberInitialized = {
    id: uuid(),
    name: 'kalvin zhao',
    email: 'kalvinzhao11@gmail.com',
    role: 'student',
  }
  //state to change add new team members
  const [teamMembers, setTeamMembers] = useState([teamMemberInitialized])

  //state to keep track form
  const blankForm = {
    name: '',
    email: '',
    role: '',
  }

  const [formInfo, setFormInfo] = useState(blankForm)

  //function to update form
  const updateForm = (keyToChange, valueToChange) =>{
    setFormInfo({...formInfo, [keyToChange] : valueToChange })
  }

  //function to get value from forms and set it to a new form object
  //check to see if form is null is so return
  //set data 
  // reset formInfo to blank form
  const submitForm = () =>{
    const teamMember = {
      name: formInfo.name.trim(),
      email: formInfo.email.trim(),
      role: formInfo.role.trim(),
    }
    if (!teamMember.name || !teamMember.email ||!teamMember.role) return 

    setTeamMembers([...teamMembers, teamMember])
    setFormInfo(blankForm)

  }

  return (
    <div className="App">
      <MemberForm formInfo={formInfo} update={updateForm} submit={submitForm}/>
      {
        teamMembers.map(member =>{
          return <Form key={member.id} member={member}/>
        })
      }
    </div>
  );
}

export default App;
