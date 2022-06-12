import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

const Home = () => (
  <>
    <Link href="/login_phone">
      <a className={styles.button + ' button'}>Login</a>
    </Link>
    <Link href="/login_sms">
      <a className={styles.button + ' button'}>sms</a>
    </Link>
    <Link href="/login_welcome">
      <a className={styles.button + ' button'}>Login 2</a>
    </Link>
  </>
)

export default Home;
