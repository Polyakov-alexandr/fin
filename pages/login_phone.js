import styles from '../styles/Login_phone.module.scss'
import classNames from 'classnames'

const login_phone = () => {
    return (
        <div className='h100'>
            <div className={styles.login_block}>
                <h1 className="text-center">Вход в личный кабинет</h1>
                <div className={styles.input_block}>
                    <input type="text" placeholder="Телефон" />
                    <div className={styles.button + ' button'}>Войти</div>
                </div>
            </div>
        </div>
    );
}

export default login_phone;