import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Course from '../components/Course';
import { API_URL } from '../config';

export default function Home({ courses }) {
 return (
  <Layout title='e-Learning Website'>
   <Hero />
   <div className='section'>
    <h1>
     All <span className='text-success'>Courses </span> of Edule
    </h1>

    <div className='d-flex flex-wrap justify-content-start align-items-center gap-5 mt-5'>
     {courses.map((course) => (
      <Course key={course.id} course={course.attributes} courseId={course.id} />
     ))}
    </div>
   </div>
  </Layout>
 );
}

export async function getServerSideProps() {
 const res = await fetch(`http://localhost:1337/api/courses?populate=*`);
 const { data } = await res.json();

 return {
  props: {
   courses: data,
  },
 };
}
