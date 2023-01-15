import { API_URL } from '../config';
import Course from './Course';

function Courses({ courses }) {
 return (
  <Layout title='e-Learning Website'>
   <Hero />
   <div className='section'>
    <h1 className='mb-4'>
     All <span className='text-success'>Courses </span> of Edule
    </h1>

    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
     {courses.map((course) => (
      <Course key={course.id} course={course.attributes} courseId={course.id} />
     ))}
    </div>
   </div>
  </Layout>
 );
}

export async function getServerSideProps() {
 const res = await fetch(`${API_URL}/api/courses`);
 const { data } = await res.json();

 return {
  props: {
   courses: data,
  },
 };
}

export default Courses;
