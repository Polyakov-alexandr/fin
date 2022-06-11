import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home = () => (
    <Link href="/login_phone">
      <a className='button'>Login</a>
    </Link>
)

export default Home;
