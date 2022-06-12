import styles from '../styles/Login_phone.module.scss'
import Link from 'next/link';

const login_phone = () => {
    return (
        <div className='h100'>
            <Link href='/'>
                <a>
                    <div className="but-close">
                        <img src="img/close.svg" alt="" />
                    </div>
                </a>
            </Link>
            <div className={styles.login_block}>
                <h1 className="text-center">Вход в личный кабинет</h1>
                <form action="">
                    <div className={styles.input_block}>
                        <input type="text" placeholder="Телефон" />
                        <button className={styles.button + ' button'}>Войти</button>
                    </div>
                    <div className={styles.check_wrapper}>
                        <label from="#check1">
                            <div className={styles.check_wrapper_item}>
                                <input type="checkbox" id='check1' className={styles.check_wrapper_input} defaultChecked />
                                    <div className={styles.check_wrapper_icon}></div>
                            </div>
                            <div className={styles.check_wrapper_text}>Я принимаю условия Пользовательского соглашения
                                и даю своё согласие ООО «Агаев Диджитал» на обработку моей персональной информации на условиях, определенных Политикой конфиденциальности.</div>
                        </label>
                        <label from="#check2">
                            <div className={styles.check_wrapper_item}>
                                <input type="checkbox" id='check2' className={styles.check_wrapper_input} />
                                    <div className={styles.check_wrapper_icon}></div>
                            </div>
                            <div className={styles.check_wrapper_text}>Я не хочу получать рекламу и другие предложения данного сервиса</div>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default login_phone;