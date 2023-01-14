import Layout from '../../components/Layout';
import Course from '../../components/Course';
import { API_URL } from '../../config';

export default function CoursesPage({ courses }) {
 return (
  <Layout title='e-Learning Website'>
   <div className='section'>
    <h1 className='display-5 fw-semibold mb-5'>
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
 const res = await fetch(`http://localhost:1337/api/courses?populate=*`);
 const { data } = await res.json();

 return {
  props: {
   courses: data,
  },
 };
}
