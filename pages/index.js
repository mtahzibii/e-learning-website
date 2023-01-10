import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import { useRouter } from 'next/router';

export default function Home() {
 const router = useRouter();
 return (
  <Layout title='e-Learning Website'>
   <Hero />
   <Courses className='section' />
  </Layout>
 );
}
