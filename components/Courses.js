// const { courses } = require('../pages/api/courses/data.json');
import Course from './Course';

export default function Courses({ courses }) {
 console.log(courses);
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
 const res = await fetch('http://localhost:1337/api/courses');
 const { data } = await res.json();

 console.log(data);

 return {
  props: {
   courses: data,
  },
 };
}
