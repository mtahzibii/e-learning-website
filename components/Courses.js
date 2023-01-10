// const { courses } = require('../pages/api/courses/data.json');
import Course from './Course';
import styles from '../styles/Courses.module.css';
import { API_URL } from '../config/index';

export default function Courses({ courses }) {
 console.log(courses);
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

export async function getServerSideProps() {
 const res = await fetch('http://localhost:3000/api/courses');
 const courses = await res.json();

 return {
  props: {
   courses,
  },
 };
}
