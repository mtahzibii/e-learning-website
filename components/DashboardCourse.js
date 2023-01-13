import Link from 'next/link';
import styles from '../styles/DashboardCourse.module.css';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

function DashboardCourse({ order }) {
 return (
  <div className={styles.course}>
   <Link className={styles.link} href={`/courses/${order.id}`}>
    {order.attributes.name}
   </Link>

   <Link className={styles.edit} href={`/courses/edit/${order.id}`}>
    <FaPencilAlt /> Edit
   </Link>
   <a
    href='#'
    className={styles.delete}
    onClick={() => window.confirm('Are you sure to delete the order?')}
   >
    <FaTimes /> Delete
   </a>
  </div>
 );
}

export default DashboardCourse;
