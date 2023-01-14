// import { ToastContainer, toast } from 'react-toastify';
import styles from '../styles/AuthForm.module.css';
import Image from 'next/image';
import { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

function RegisterForm() {
 const { register, error } = useContext(AuthContext);

 useEffect(() => {
  error && window.alert('Registration failed');
 }, [error]);

 const [formData, setFormData] = useState({
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
 });

 const { username, email, password, passwordConfirm } = formData;

 const onChangeHandler = (e) => {
  setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
 };

 const onSubmitHandler = (e) => {
  e.preventDefault();

  if (password !== passwordConfirm) {
   window.alert('passwords do not match');
   return;
  }

  register(formData);
 };

 return (
  <div className='row m-5 border' style={{ borderRadius: '20px' }}>
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
   <div className='col-12 col-md-6'>
    <div className={styles.register}>
     <h2 className='my-5'>Registration From</h2>
     <form onSubmit={onSubmitHandler} className='w-75 mb-5'>
      <input
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
