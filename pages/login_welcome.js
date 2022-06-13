import styles from '../styles/Login_welcome.module.scss'
import Link from 'next/link';

const login_welcome = () => {
    return (
        <div>
            <Link href='/'>
                <a>
                    <div className="but-close">
                        <img src="img/close.svg" alt="" />
                    </div>
                </a>
            </Link>
            <div className={styles.login_block}>
                <h1 className="text-center">Добро пожаловать</h1>
                <form action="">
                    <div className={styles.phone_input}>
                        <div className="">Ваш номер</div>
                        <div className="">+7 977 717 84 87</div>
                    </div>
                    <div className={styles.phone_text}>Номер телефона изменить нельзя</div>
                    <input type="text" placeholder="Ваше Имя" />
                    <input type="email" placeholder="Email" />
                    <button className={styles.button + ' button'}>Продолжить</button>
                    <a href="" className="text-center">Отменить</a>
                </form>
            </div>
        </div>
    );
}

export default login_welcome;