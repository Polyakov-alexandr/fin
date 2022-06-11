import styles from "./Footer.module.scss"
import Image from "next/image";
const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.copir}>2021 &copy;Название. Все права защищены.</div>
        <div className={styles.logo}>
            <Image src='/img/logo-agaev.svg' width={85} height={26} />
        </div>
        <div className={styles.card}>
            <Image src='/img/card.png' width={216} height={25} />
        </div>
    </footer>
);

export default Footer;