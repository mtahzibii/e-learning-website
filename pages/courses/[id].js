import Layout from '../../components/Layout';
import Image from 'next/image';
import { NEXT_URL } from '../../config';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import {
 BsPerson,
 BsClock,
 BsCameraVideo,
 BsBarChart,
 BsBook,
 BsTrophy,
 BsStar,
 BsStarFill,
 BsStarHalf,
} from 'react-icons/bs';

export default function CoursePage({ course }) {
 const { user, placeOrder } = useContext(AuthContext);

 const placeOrderHandler = async (e) => {
  e.preventDefault();

  const order = {
   course,
   user,
  };

  placeOrder(order);
 };

 return (
  <Layout>
   <div style={{ margin: '60px 70px' }}>
    <div className='row'>
     <div className='col-8'>
      <Image
       src='/assets/course_info.png'
       alt='course_image'
       width={760}
       height={400}
       className='ms-3 rounded-3'
      />
      <button
       className='btn '
       style={{
        position: 'absolute',
        bottom: '100px',
        left: '120px',
        color: 'white',
        width: '120px',
        backgroundColor: '#ffba00',
       }}
      >
       {course.category}
      </button>
      <h3 className='ms-3 my-4'>{course.name}</h3>
      <div className='d-flex justify-content-between align-items-center'>
       <div className='d-flex justify-content-center align-items-center'>
        <Image
         src={course.thumbnail}
         alt='instructor_thumbnail'
         width={50}
         height={50}
         className='rounded-circle mx-2'
        />
        <p className='fw-semibold mx-3 lead mt-3'>{course.instructor}</p>{' '}
        <span> || </span>
        <p className='mt-3 mx-3 text-success'>{course.enrolled} Enrolled Students</p>
       </div>
       <div className='d-flex justify-content-center align-items-center'>
        <p className='fw-bold mx-3'>{course.rating}</p>
        <BsStar className='mb-3 me-3' />
        <p>(5,764 Rating)</p>
       </div>
      </div>
      <hr />
      <h2 className='my-3'>Description:</h2>
      <p>{course.description}</p>
     </div>

     {/* Description */}

     <div className='col-4 '>
      <div
       className='mx-3 mx-auto border py-4 px-2 rounded-3 '
       style={{ backgroundColor: '#e7f8ee' }}
      >
       <div className='mx-3'>
        <h1
         className='text-center text-success mb-5 fw-bold'
         style={{ fontSize: '36px' }}
        >
         {course.discountedPrice}
        </h1>

        <div className='d-flex justify-content-between border-top  pt-2 '>
         <div>
          <BsPerson /> <span className='ms-1 fw-bold'>Instructor</span>
         </div>
         <p style={{ fontSize: '20px' }}>{course.instructor}</p>
        </div>

        <div className='d-flex justify-content-between border-top  pt-2 '>
         <div>
          <BsClock /> <span className='ms-1 fw-bold'>Duration</span>
         </div>
         <p style={{ fontSize: '20px' }}>{course.duration}</p>
        </div>

        <div className='d-flex justify-content-between border-top  pt-2 '>
         <div>
          <BsCameraVideo /> <span className='ms-1 fw-bold'>Lectures</span>
         </div>
         <p style={{ fontSize: '20px' }}>{course.lecturesCounts}</p>
        </div>

        <div className='d-flex justify-content-between border-top  pt-2 '>
         <div>
          <BsBarChart /> <span className='ms-1 fw-bold'>Level</span>
         </div>
         <p style={{ fontSize: '20px' }}>{course.level}</p>
        </div>

        <div className='d-flex justify-content-between border-top  pt-2 '>
         <div>
          <BsBook /> <span className='ms-1 fw-bold'>Language</span>
         </div>
         <p style={{ fontSize: '20px' }}>{course.language}</p>
        </div>

        <div className='d-flex justify-content-between border-top  pt-2 '>
         <div>
          <BsTrophy /> <span className='ms-1 fw-bold'>Certificate</span>
         </div>
         <p style={{ fontSize: '20px' }}>{course.certificate}</p>
        </div>

        <button
         type='submit'
         className='btn btn-primary w-100 mt-4'
         style={{ height: '50px' }}
         onClick={placeOrderHandler}
        >
         Enroll now
        </button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </Layout>
 );
}

export async function getServerSideProps({ query: { id } }) {
 const res = await fetch(`http://localhost:3000/api/courses/${id}`);
 const data = await res.json();

 return {
  props: {
   course: data[0],
  },
 };
}
