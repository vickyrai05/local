import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Note the correct import

function Crudop() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/data', {
      e_name: name,   // Use the correct state variable names
      e_email: email, // Use the correct state variable names
    })
    .then(() => {
      // Show success message using SweetAlert2
      Swal.fire({
        title: 'Good job!',
        text: 'Data submitted successfully!',
        icon: 'success',
      });
    })
    
  };

  return (
    <div align='center'>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name:</label>
        <input
          type='text'
          placeholder='Enter Your Name'
          name='name'
          value={name}
          onChange={changeName}
        />
        <br />
        <br />
        <label>Enter Your Email:</label>
        <input
          type='email'
          placeholder='Enter Your Email'
          name='email'
          value={email}
          onChange={changeEmail}
        />
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Crudop;
