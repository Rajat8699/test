import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react'
function App() {
  const [user, setUser] = useState({})

  const [value, setValue] = useState(0)

  const handleClick = () => {
    if (value > 0 && value < 11) {
      axios.get(`https://reqres.in/api/users/${value}`).then(res => { setUser(res?.data?.data) }).catch(err => alert("An error occured"))
    } else {
      alert('wrong value entered')
    }
  }


  return (
    <div className="App">
      <input name="search" type='number' onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={handleClick}>Search</button>
      {Object.keys(user).length > 0 && <div className="user"><input name="firstName" type='text' value={user.first_name || ""} />

        <input name="lastName" type='text' value={user.last_name || ""} />
        <input name="email" type='email' value={user.email || ""} />
        <img src={user.avatar} /></div>}
    </div>
  );
}

export default App;
