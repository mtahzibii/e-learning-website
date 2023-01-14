import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout({ title, description, keywords, children }) {
 return (
  <div>
   <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='keywords' content={keywords} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
   </Head>
   <Header />
   <div className=''>{children}</div>

   <Footer />
  </div>
 );
}

export default Layout;
