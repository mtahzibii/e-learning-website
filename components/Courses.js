const { courses } = require('../pages/api/courses/data.json');
import Course from './Course';
import styles from '../styles/Courses.module.css';

function Courses() {
 return (
  <div className='section'>
   <h1>
    All <span className='text-success'>Courses </span> of Edule
   </h1>

   <div className='d-flex flex-wrap justify-content-start align-items-center gap-5 mt-5'>
    {courses.map((course) => (
     <Course key={course.id} course={course} />
    ))}
   </div>
  </div>
 );
}

export default Courses;
