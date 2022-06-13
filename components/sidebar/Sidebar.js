import Link from "next/link";
import styles from "./Sidebar.module.scss"
import Image from "next/image"
import { useRouter } from 'next/router';

const Sidebar = () => {
    const { pathname } = useRouter();
    return (
        <div className={styles.wrapper}>
            <div className={styles.profile}>B</div>
            <Link href='users'>
                <a className={pathname === '/admin/statistics' ? styles.active : null}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path d="M3.99998 0H6.99998C9.20911 0 11 1.79086 11 3.99998V6.99998C11 9.20911 9.20911 11 6.99998 11H3.99998C1.79086 11 0 9.20916 0 6.99998V3.99998C0 1.79086 1.79086 0 3.99998 0Z" fill="#616871" />
                            <path d="M17 0H20C22.2092 0 24 1.79086 24 3.99998V6.99998C24 9.20911 22.2092 11 20 11H17C14.7909 11 13.0001 9.20911 13.0001 6.99998V3.99998C13 1.79086 14.7909 0 17 0Z" fill="#616871" />
                            <path d="M3.99998 13H6.99998C9.20911 13 11 14.7909 11 17V20C11 22.2091 9.20911 24 6.99998 24H3.99998C1.79086 24 0 22.2092 0 20V17C0 14.7909 1.79086 13 3.99998 13Z" fill="#616871" />
                            <path d="M17 13H20C22.2092 13 24 14.7909 24 17V20C24 22.2092 22.2092 24 20 24H17C14.7909 24 13.0001 22.2092 13.0001 20V17C13 14.7909 14.7909 13 17 13Z" fill="#616871" />
                        </g>
                    </svg>
                </a>
            </Link>
            <Link href='users'>
                <a className={pathname === '/admin/pay' ? styles.active : null}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.31998 6.71988H18.24V4.31988C18.24 3.52459 17.5953 2.87988 16.8 2.87988C16.7408 2.87988 16.6816 2.88354 16.6228 2.89083L4.00279 4.45555C2.81046 4.61453 1.91998 5.63161 1.91998 6.8345V7.72837C2.52983 7.10603 3.37981 6.71988 4.31998 6.71988ZM19.6801 7.67988H4.32006C3.66548 7.67988 3.05491 7.94188 2.60573 8.40027L1.92006 9.09999V19.6799C1.92006 21.0054 2.99458 22.0799 4.32006 22.0799H19.6801C21.0055 22.0799 22.0801 21.0054 22.0801 19.6799V18.2399H16.8001C14.9444 18.2399 13.4401 16.7356 13.4401 14.8799C13.4401 13.0242 14.9444 11.5199 16.8001 11.5199H22.0801V10.0799C22.0801 8.75439 21.0055 7.67988 19.6801 7.67988ZM16.8005 12.48C15.475 12.48 14.4005 13.5545 14.4005 14.88C14.4005 16.2055 15.475 17.28 16.8005 17.28H22.0805V12.48H16.8005Z" fill="#616871" />
                        </g>
                    </svg>
                </a>
            </Link>
            <Link href='users'>
                <a className={pathname === '/admin/users' ? styles.active : null}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path d="M10.5 21C10.5 21 9 21 9 19.5C9 18 10.5 13.5 16.5 13.5C22.5 13.5 24 18 24 19.5C24 21 22.5 21 22.5 21H10.5ZM16.5 12C17.6935 12 18.8381 11.5259 19.682 10.682C20.5259 9.83807 21 8.69347 21 7.5C21 6.30653 20.5259 5.16193 19.682 4.31802C18.8381 3.47411 17.6935 3 16.5 3C15.3065 3 14.1619 3.47411 13.318 4.31802C12.4741 5.16193 12 6.30653 12 7.5C12 8.69347 12.4741 9.83807 13.318 10.682C14.1619 11.5259 15.3065 12 16.5 12Z" fill="#616871" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.824 21C7.60163 20.5318 7.49073 20.0183 7.5 19.5C7.5 17.4675 8.52 15.375 10.404 13.92C9.46364 13.6303 8.48392 13.4886 7.5 13.5C1.5 13.5 0 18 0 19.5C0 21 1.5 21 1.5 21H7.824Z" fill="#616871" />
                            <path d="M6.75 12C7.74456 12 8.69839 11.6049 9.40165 10.9017C10.1049 10.1984 10.5 9.24456 10.5 8.25C10.5 7.25544 10.1049 6.30161 9.40165 5.59835C8.69839 4.89509 7.74456 4.5 6.75 4.5C5.75544 4.5 4.80161 4.89509 4.09835 5.59835C3.39509 6.30161 3 7.25544 3 8.25C3 9.24456 3.39509 10.1984 4.09835 10.9017C4.80161 11.6049 5.75544 12 6.75 12Z" fill="#616871" />
                        </g>
                    </svg>
                </a>
            </Link>
            <Link href='#'>
                <a>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path d="M1.60731 18C2.43447 19.4356 4.26882 19.9288 5.70442 19.1017C5.7054 19.1011 5.70634 19.1005 5.70732 19.1L6.15231 18.843C6.99231 19.5616 7.95784 20.119 9.00029 20.487V21C9.00029 22.6568 10.3434 24 12.0003 24C13.6571 24 15.0003 22.6568 15.0003 21V20.487C16.0429 20.1184 17.0085 19.5604 17.8483 18.841L18.2953 19.099C19.7312 19.9274 21.5669 19.4349 22.3953 17.999C23.2237 16.563 22.7312 14.7274 21.2953 13.899L20.8513 13.643C21.0512 12.5554 21.0512 11.4405 20.8513 10.353L21.2953 10.097C22.7312 9.26855 23.2237 7.43292 22.3953 5.99695C21.5669 4.56103 19.7312 4.06852 18.2953 4.89694L17.8503 5.15395C17.0094 4.43616 16.0433 3.87984 15.0003 3.513V3C15.0003 1.34316 13.6571 0 12.0003 0C10.3434 0 9.00029 1.34316 9.00029 3V3.513C7.9577 3.88158 6.99212 4.43958 6.15231 5.15902L5.70531 4.90003C4.26934 4.07156 2.43372 4.56408 1.60529 6C0.776871 7.43592 1.26934 9.27159 2.70531 10.1L3.14931 10.356C2.94943 11.4435 2.94943 12.5584 3.14931 13.646L2.70531 13.902C1.27332 14.7326 0.782449 16.5647 1.60731 18ZM12.0003 8.00002C14.2094 8.00002 16.0003 9.79088 16.0003 12C16.0003 14.2091 14.2094 16 12.0003 16C9.79117 16 8.00031 14.2091 8.00031 12C8.00031 9.79088 9.79117 8.00002 12.0003 8.00002Z" fill="#616871" />
                        </g>
                    </svg>
                </a>
            </Link>
            <Link href='#'>
                <a>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#616871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 17L21 12L16 7" stroke="#616871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 12H9" stroke="#616871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </a>
            </Link>
        </div>
    );
}

export default Sidebar;