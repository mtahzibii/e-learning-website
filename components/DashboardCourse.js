import Link from 'next/link';
import styles from '../styles/DashboardCourse.module.css';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

function DashboardCourse({ order }) {
 return (
  <div className={styles.course}>
   <Link className={styles.link} href={`/courses/${order.id}`}>
    {order.attributes.name}
   </Link>

   <Link
    className={`{styles.edit} btn btn-outline-success me-4`}
    href={`/courses/edit/${order.id}`}
    style={{ fontSize: '15px' }}
   >
    <FaPencilAlt /> Edit
   </Link>
   <a
    href='#'
    className={`{styles.delete} btn btn-outline-danger`}
    onClick={() => window.confirm('Are you sure to delete the order?')}
    style={{ fontSize: '15px' }}
   >
    <FaTimes /> Delete
   </a>
  </div>
 );
}

export default DashboardCourse;
