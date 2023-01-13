import Layout from '../../components/Layout';
import Course from '../../components/Course';
import { API_URL } from '../../config';

export default function CoursesPage({ courses }) {
 return (
  <Layout title='e-Learning Website'>
   <div className='section'>
    <h1 className='display-5 fw-semibold'>
     All <span className='text-success'>Courses </span> of Edule
    </h1>

    <div className='d-flex flex-wrap justify-content-start align-items-center gap-5 mt-5'>
     {courses.map((course) => (
      <Course key={course.id} course={course} />
     ))}
    </div>
   </div>
  </Layout>
 );
}

export async function getServerSideProps() {
 const res = await fetch(`${API_URL}/api/courses`);
 const courses = await res.json();

 return {
  props: {
   courses,
  },
 };
}
