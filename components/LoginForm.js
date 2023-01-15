import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/AuthForm.module.css';
import Image from 'next/image';
import { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import Spinner from './Spinner';

function LoginForm() {
 const { error, login, user, isLoading } = useContext(AuthContext);

 useEffect(() => {
  error && toast.error(error);
 }, [error, user]);

 const [formData, setFormData] = useState({
  email: '',
  password: '',
 });

 const { email, password } = formData;

 const onChangeHandler = (e) => {
  setFormData((prevState) => ({ ...formData, [e.target.id]: e.target.value }));
 };

 const onSubmitHandler = (e) => {
  e.preventDefault();

  const user = {
   email,
   password,
  };

  // Check forms are filled out
  const hasEmptyField = Object.values(formData).some((element) => element === '');
  if (hasEmptyField) {
   toast.error('Please fill out all required fields');
  } else {
   login(user);
  }
 };

 if (isLoading) return <Spinner />;

 return (
  <div className='row m-5 border' style={{ borderRadius: '20px' }}>
   <ToastContainer />
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
    <div className={styles.login}>
     <h1 className='my-5 '>Login Form</h1>
     <form onSubmit={onSubmitHandler} className='w-75 '>
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
      <button type='submit' className={`${styles.submit} btn btn-success`}>
       Login
      </button>
     </form>
    </div>
   </div>
  </div>
 );
}

export default LoginForm;
