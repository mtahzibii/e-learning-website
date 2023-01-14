import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Course.module.css';
import {
 BsClockFill,
 BsFillJournalBookmarkFill,
 BsStar,
 BsStarFill,
} from 'react-icons/bs';

function Course({ course, courseId }) {
 return (
  <div class='col'>
   <div class='card shadow-sm  h-100'>
    <div style={{ padding: '10px' }}>
     <div
      className='w-100'
      style={{
       height: '150px',
       position: 'relative',
      }}
     >
      <Link href={`/courses/${courseId}`}>
       <Image
        src={
         course?.image?.data?.attributes?.formats?.thumbnail?.url ??
         `/assets/images/cover_images/${courseId}.png`
        }
        alt='cover_image'
        fill={true}
        className='my-1 mb-3'
        style={{ borderRadius: '15px', objectFit: 'cover' }}
       />
      </Link>
     </div>
    </div>

    {/* Course body */}
    <div class='card-body'>
     <div className='d-flex justify-content-between align-items-center'>
      <div className='d-flex justify-content-center align-items-center mb-3'>
       <Image
        src={
         course?.thumbnail?.data?.attributes?.url ??
         `/assets/images/thumbnails/${courseId}.png`
        }
        alt='thumbnail'
        width={50}
        height={50}
        className='rounded-circle me-2'
       />
       <p className='text-muted mt-3'>{course.instructor}</p>
      </div>
      <button className={styles.category}>{course.category}</button>
     </div>
     <Link
      href={`/courses/${course.id}`}
      className='lead fw-semibold'
      style={{ textDecoration: 'none', color: 'rgb(59, 58, 58)', fontSize: '16px' }}
     >
      {course.name}
     </Link>

     {/* Course Details */}
     <div className={`${styles.courseInfo} mt-3`}>
      <div className='d-flex justify-content-center align-items-center gap-2 text-muted'>
       <BsClockFill /> {course.duration}
      </div>
      <div>
       <BsFillJournalBookmarkFill /> {course.lecturesCounts} Lectures
      </div>
     </div>

     <div className={`${styles.price} border px-4 py-2 mt-3`}>
      <div className='d-flex justify-content-center align-items-center gap-3'>
       <span className={styles.discounted}>{course.discountedPrice}</span>
       <span className={styles.beforeDiscount}>{course.price}</span>
      </div>

      <div className='d-flex justify-content-center align-items-center gap-2'>
       <span className=''>{course.rating}</span>
       <div>
        <BsStar />
        <BsStarFill />
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Course;
