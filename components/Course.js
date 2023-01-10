import Image from 'next/image';
import styles from '../styles/Course.module.css';
import {
 BsClockFill,
 BsFillJournalBookmarkFill,
 BsStar,
 BsStarFill,
 BsStarHalf,
} from 'react-icons/bs';

function Course({ course }) {
 return (
  <div
   className='d-flex flex-column border border'
   style={{ borderRadius: '15px', maxWidth: '30%' }}
  >
   <div className={styles.boxContainer}>
    <Image
     src={course.cover_img}
     alt='cover_image'
     width={330}
     height={200}
     className='my-1 mb-3'
     style={{ borderRadius: '15px' }}
    />
    <div className='d-flex justify-content-between align-items-center'>
     <div className='d-flex justify-content-center align-items-center '>
      <Image
       src={course.thumbnail}
       width={50}
       height={50}
       className='rounded-circle me-2'
      />
      <p className='text-muted mt-3'>{course.instructor}</p>
     </div>
     <button className={styles.category}>{course.category}</button>
    </div>
    <p className='lead fw-semibold '>{course.name}</p>

    <div className={styles.courseInfo}>
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
 );
}

export default Course;
