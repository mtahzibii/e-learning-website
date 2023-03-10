import cookie from 'cookie';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from '../../styles/Dashboard.module.css';
import DashboardCourse from '../../components/DashboardCourse';
import { API_URL } from '../../config';

function DashboardPage({ orders }) {
 return (
  <Layout title='Dashboard'>
   <div className={styles.dashboard}>
    <h1>Dashboard</h1>
    <h3 className='text-success fw-semibold mb-4'>My Orders</h3>

    {orders.length === 0 && <>No orders enrolled</>}

    {/* List all orders */}
    {orders.map((order) => (
     <DashboardCourse key={order.id} order={order.attributes.course.data[0]} />
    ))}
   </div>
  </Layout>
 );
}

export default DashboardPage;

export async function getServerSideProps({ req }) {
 // Get token from request header
 const token = cookie.parse(req ? req.headers.cookie || '' : '');

 //  Fetch user orderds
 const res = await fetch(`${API_URL}/api/orders?populate=*`, {
  method: 'GET',
  headers: {
   Authorization: `Bearer ${token}`,
  },
 });

 const { data } = await res.json();
 return {
  props: {
   orders: data,
  },
 };
}
