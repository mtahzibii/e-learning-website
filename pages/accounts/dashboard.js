import cookie from 'cookie';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from '../../styles/Dashboard.module.css';
import DashboardCourse from '../../components/DashboardCourse';

function DashboardPage({ orders }) {
 console.log(orders);
 return (
  <Layout title='Dashboard'>
   <div className={styles.dashboard}>
    <h1>Dashboard</h1>
    <h3>My Orders</h3>
    {orders.map((order) => (
     <DashboardCourse key={order.id} order={order.attributes.course.data} />
    ))}
   </div>
  </Layout>
 );
}

export default DashboardPage;

export async function getServerSideProps({ req }) {
 const token = cookie.parse(req ? req.headers.cookie || '' : '');
 console.log(token);

 const res = await fetch('http://localhost:1337/api/orders?populate=*', {
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
