import styles from '../styles/Login_sms.module.scss'
import Link from 'next/link';

const login_sms = () => {
    return (
        <div>
            <Link href='/login_phone'>
                <a>
                    <div className="but-close">
                        <img src="img/back.svg" alt="" />
                    </div>
                </a>
            </Link>
            <div className={styles.login_block}>
                <h1 className="text-center">Код из СМС</h1>
                <h2 className="text-center">Мы отправили СМС с кодом на номер +7 (977) 717-84-87</h2>
                <form action="">
                    <div className={styles.input_block}>
                        <input type="text" placeholder="Код из СМС" />
                        <button className={styles.button + ' button'}>Ok</button>
                    </div>
                </form>
                <h3 className="text-center">Запросить код повторно можно через 43 секунды</h3>
                <a href="" className="text-center">Не приходит СМС</a>
            </div>
        </div>
    );
}

export default login_sms;