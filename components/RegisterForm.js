import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/AuthForm.module.css';
import Image from 'next/image';
import { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import Spinner from './Spinner';

function RegisterForm() {
 const { register, error, isLoading } = useContext(AuthContext);

 useEffect(() => {
  error && window.alert('Registration failed');
 }, [error]);

 const [formData, setFormData] = useState({
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
  gender: 'female',
  notif: 'false',
  account: '',
 });

 const { username, email, password, passwordConfirm, gender, notif, account } =
  formData;

 const onChangeHandler = (e) => {
  let target = e.target;
  let id = target.id;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  setFormData((prevState) => ({ ...prevState, [id]: value }));
 };

 const onSubmitHandler = (e) => {
  e.preventDefault();

  // Password validation
  if (password !== passwordConfirm) {
   toast.error('passwords do not match');
   return;
  }

  // Check forms are filled out
  const hasEmptyField = Object.values(formData).some((element) => element === '');
  if (hasEmptyField) {
   toast.error('Please fill out all required fields');
  } else {
   register(formData);
  }
 };

 if (isLoading) {
  return <Spinner />;
 }

 return (
  <div className='row m-5 border' style={{ borderRadius: '20px' }}>
   <ToastContainer />
   {/* Left Side */}
   <div className='col-12 col-sm-12 col-md-6'>
    <div className='mx-auto'>
     <Image
      src='/assets/regsiter_form.png'
      alt='image'
      width={350}
      height={500}
      className='m-5'
     />
    </div>
   </div>

   {/* Right Side */}
   <div className='col-12 col-md-6'>
    <div className={styles.register}>
     <h2 className='my-5'>Registration From</h2>
     <form onSubmit={onSubmitHandler} className='w-75 mb-5'>
      <input
       autocomplete='false'
       id='username'
       value={username}
       type='text'
       placeholder='Username'
       className={styles.form}
       onChange={(e) => onChangeHandler(e)}
      />
      <input
       id='email'
       value={email}
       type='email'
       placeholder='Email'
       className={styles.form}
       onChange={(e) => onChangeHandler(e)}
      />
      <input
       id='password'
       value={password}
       type='password'
       placeholder='Password'
       className={styles.form}
       onChange={(e) => onChangeHandler(e)}
      />
      <input
       id='passwordConfirm'
       value={passwordConfirm}
       type='password'
       placeholder='Confirm Password'
       className={styles.form}
       onChange={(e) => onChangeHandler(e)}
      />

      {/* Gender */}
      <div class=' col-md-12 mb-4 px-1'>
       <label className='me-3 mt-2 mb-2'>Gender</label>
       <select
        class='select form-control form-control-md'
        id='gender'
        value={gender}
        onChange={onChangeHandler}
       >
        <option value='' disabled id='gender' onChange={(e) => onChangeHandler(e)}>
         Gender
        </option>
        <option value='female'>Female</option>
        <option value='male'>Male</option>
        <option value='other'>Other</option>
       </select>
      </div>

      {/* user type */}
      <div class='d-md-flex justify-content-between align-items-center mb-1 py-2 px-1 '>
       <h6 class='mb-1 me-4'>User Account</h6>

       <div className='d-flex gap-3'>
        <div class='form-check form-check-inline mb-0 me-0 '>
         <input
          class='form-check-input'
          type='radio'
          id='account'
          name='account'
          value='student'
          onChange={onChangeHandler}
          checked={account === 'student'}
         />
         <label class='form-check-label' for='student'>
          Student
         </label>
        </div>

        <div class='form-check form-check-inline mb-0 me-0'>
         <input
          class='form-check-input'
          type='radio'
          id='account'
          name='account'
          value='instructor'
          onChange={onChangeHandler}
          checked={account === 'instructor'}
         />
         <label class='form-check-label' for='instructor'>
          Instructor
         </label>
        </div>
       </div>
      </div>

      {/* Receive Notifications */}
      <div class='form-check form-switch'>
       <input
        class='form-check-input mt-2 me-2'
        type='checkbox'
        id='notif'
        value={notif}
        onChange={(e) => onChangeHandler(e)}
       />
       <label
        class='form-check-label'
        for='notification'
        style={{ fontSize: '14px' }}
       >
        Receive Notofications
       </label>
      </div>

      {/* Upload file  */}
      {/* <div className='px-1'>
       <label for='formFileSm' class='form-label '>
        Upload your CV
       </label>
       <input class='form-control form-control-md' id='formFileSm' type='file' />
      </div> */}

      {/* Submit */}
      <button type='submit' className={`${styles.submit} btn btn-success`}>
       Create Account
      </button>
     </form>
    </div>
   </div>
  </div>
 );
}

export default RegisterForm;
