import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect,useState } from 'react'
import {FaEye,FaEyeSlash} from 'react-icons/fa';


const Update=()=>{
  const navigate = useNavigate();

  const [Emailaddress, setEmail] = useState();
  const [Password, setPass] = useState();
  const [id,setID]=useState()
  const [passwordType, setpassType] = useState('password');
  const [Gender, setGender] = useState('MALE'); // default value
 
  const PostupateUser=()=>
  {
    

    axios.put(`http://localhost:3000/Data/${id}`, {
    Emailaddress,
    Password,
    Gender,
  });
    navigate('/read')
  }
  useEffect(()=>{
    setID(localStorage.getItem('id'))
    setEmail(localStorage.getItem('Emailaddress'))
    setPass(localStorage.getItem('Password'))
    setGender(localStorage.getItem('Gender'))
 },[])

  const togglePassword = () => {
    if (passwordType === 'password') {
      setpassType('text');
      return;
    }
    setpassType('password');
  };

  return (
    <div>
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
            <button type='submit' onClick={PostupateUser} class='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Update