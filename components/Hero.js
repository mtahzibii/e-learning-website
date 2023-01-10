import styles from '../styles/Hero.module.css';

function Hero() {
 return (
  <>
   <div className={`${styles.hero} section`}>
    {/* left side */}
    <div className={styles.leftSide}>
     <h4 className='text-success '>Start your favourite course</h4>
     <br />
     <h1 className='lh-base display-5 fw-semibold'>
      Now learning from
      <br />
      anywhere, and build
      <br />
      your<span className='text-success mb-4'> bright career.</span>
     </h1>
     <p>
      It has survived not only five centuries but also the leap into electronic
      typesetting.
     </p>
    </div>
    {/* Right side */}
    <div className={styles.rightSide}></div>
   </div>
  </>
 );
}

export default Hero;
