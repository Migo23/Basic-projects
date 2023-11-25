import React, { useState } from 'react';
import './index.css';

function App() {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    id: 1,
    pesel: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    gender: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleAddPerson = () => {
    setPerson({ ...person, id: new Date().getTime().toString() });
    setPeople([...people, person]);
    setPerson({
      id: person.id+1,
      pesel: '',
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
      gender: ''
    });
  };

  return (
    <div className="App">
      <h1>React Person Info App</h1>
      <div>
        <label>Pesel:</label>
        <input type="text" name="pesel" value={person.pesel} onChange={handleInputChange} />
      </div>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={person.firstName} onChange={handleInputChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={person.lastName} onChange={handleInputChange} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={person.address} onChange={handleInputChange} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={person.phoneNumber} onChange={handleInputChange} />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={person.gender} onChange={handleInputChange}>
          <option value="null"></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button onClick={handleAddPerson}>Add Person</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pesel</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.pesel}</td>
              <td>{p.firstName}</td>
              <td>{p.lastName}</td>
              <td>{p.address}</td>
              <td>{p.phoneNumber}</td>
              <td>{p.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;