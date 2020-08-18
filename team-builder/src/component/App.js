import React, {useState} from 'react';
// import './App.css';

function App() {
  const teamMemberInitialized = {
    name: '',
    email: '',
    role: '',
  }
  const [teamMembers, setTeamMembers] = useState(teamMemberInitialized)

  return (
    <div className="App">
      <p>hi</p>
    </div>
  );
}

export default App;
