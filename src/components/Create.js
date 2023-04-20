import React, { useEffect } from 'react';
import './Create.css';
import { useState } from 'react';
import {FaEye,FaEyeSlash} from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [Emailaddress, setEmail] = useState('');
  const [Password, setPass] = useState('');
  const [passwordType, setpassType] = useState('password');
  const [Gender, setGender] = useState('MALE'); // default value
  const navigate =useNavigate()
  const postUpdate = () => {
    axios.post('http://localhost:3000/Data',
    {
      Emailaddress,
      Password,
      Gender,
    })
    navigate('/read');
  };
  useEffect(()=>{
    togglePassword()
  },[])

  const togglePassword = () => {
    if (passwordType === 'password') {
      setpassType('text');
      return;
    }
    setpassType('password');
  };

  return (
    <div className='box'>
      <div class='p-3 mb-2 bg-secondary text-white'>
        <form className='form1'>
          <div class='mb-3'>
            <label htmlFor='exampleInputEmail1' class='form-label'>
              Email address
            </label>
            <input
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={Emailaddress}
              name='email'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
          </div>
          <div class='mb-3'>
  <label htmlFor='exampleInputPassword1' class='form-label'>
    Password
  </label>
  <div className='input-group'>
    <input
      type={passwordType}
      onChange={(e) => setPass(e.target.value)}
      value={Password}
      name='password'
      class='form-control'
      id='exampleInputPassword1'
    />
    <button className='btn btn-outline-primary' onClick={togglePassword}>
      {passwordType === 'password' ? < FaEye /> : <FaEyeSlash />}
    </button>
  </div>
</div><div class='form-check'>
            <input
              class='form-check-input'
              onChange={(e) => setGender(e.target.value)}
              checked={Gender === 'MALE'}
              type='radio'
              value='MALE'
              name='gender'
              id='flexRadioDefault1'
            />
            <label class='form-check-label' htmlFor='flexRadioDefault1'>
              MALE
            </label>
          </div>
          <div class='form-check'>
            <input
              class='form-check-input'
              onChange={(e) => setGender(e.target.value)}
              checked={Gender === 'FEMALE'}
              type='radio'
              value='FEMALE'
              name='gender'
              id='flexRadioDefault2'
            />
            <label class='form-check-label' htmlFor='flexRadioDefault2'>
              FEMALE
            </label>
          </div>
          <div className='button'>
            <button type='submit' onClick={postUpdate} class='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Create
