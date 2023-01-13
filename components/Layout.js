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
    <link
     href='https://fonts.googleapis.com/css2?family=Dosis&family=Poppins:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap'
     rel='stylesheet'
    />
    {/* <link
     rel='stylesheet'
     href='https://use.fontawesome.com/releases/v5.7.2/css/all.css'
     integrity='sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr'
     crossorigin='anonymous'
    /> */}
   </Head>
   <Header />
   <div className=''>{children}</div>

   <Footer />
  </div>
 );
}

export default Layout;
