import Layout from '../../components/Layout';
import RegisterForm from '../../components/RegisterForm';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';

function RegsiterPage() {
 const { user } = useContext(AuthContext);
 const router = useRouter();

 if (user) {
  router.push('/courses');
 }
 return (
  <Layout title='Register'>
   <RegisterForm />
  </Layout>
 );
}

export default RegsiterPage;
