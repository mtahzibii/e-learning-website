import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/AuthForm.module.css';
import Image from 'next/image';
import { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

function LoginForm() {
 const { error, login, user } = useContext(AuthContext);

 useEffect(() => {
  error && toast.error(error);
  user && toast.success('Logged in successfully');
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

  login(user);
 };

 return (
  <div className={styles.mainDiv}>
   <div className={styles.innerDiv}>
    <ToastContainer />
    <div className={styles.leftSide}>
     <Image src='/assets/regsiter_form.png' alt='image' width={350} height={500} />
    </div>
    <div className={styles.rightSide}>
     <h2 className='mb-5'>Login From</h2>
     <form onSubmit={onSubmitHandler}>
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
