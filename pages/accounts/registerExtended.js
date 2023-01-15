import Layout from '../../components/Layout';
import RegisterFormExtended from '../../components/RegisterFormExtended';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';

function RegsiterExtebded() {
 const { user } = useContext(AuthContext);
 const router = useRouter();

 //  Check if user is already logged in
 if (user) {
  router.push('/courses');
 }
 return (
  <Layout title='Register'>
   <RegisterFormExtended />
  </Layout>
 );
}

export default RegsiterExtebded;
