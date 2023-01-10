import Layout from '../components/Layout';
import Link from 'next/link';
import styes from '../styles/404.module.css';

function NotFoundPage() {
 return (
  <Layout title='Page Not Found'>
   <div className={styes.error}>
    <h1>404</h1>
    <h4>Sorry, there is nothing here </h4>
    <Link href='/'>Go Back Home</Link>
   </div>
  </Layout>
 );
}

export default NotFoundPage;
