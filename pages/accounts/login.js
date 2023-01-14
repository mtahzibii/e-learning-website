import Layout from '../../components/Layout';
import LoginForm from '../../components/LoginForm';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useRouter } from 'next/router';

function LoginPage() {
 const { user } = useContext(AuthContext);
 const router = useRouter();

 if (user) {
  router.push('/courses');
 }

 return (
  <Layout title='Login'>
   <LoginForm />
  </Layout>
 );
}

export default LoginPage;
