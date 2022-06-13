import styles from "./UserList.module.scss"

const UserList = () => {
    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.header}>
                        <td>Имя</td>
                        <td>Телефон</td>
                        <td>Email</td>
                        <td>Регистрация</td>
                        <td>Баланс</td>
                        <td>Действия</td>
                    </tr>
                    <tr className={styles.item}>
                        <td>Андрей</td>
                        <td>+7 999 999 99 99</td>
                        <td>pochtanova@gmail.com</td>
                        <td>11.06.2022</td>
                        <td>132 руб.</td>
                        <td>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Разблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H17ZM18 12L18.002 20H6V12H18Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Заблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 21C11.1819 21 12.3522 20.7672 13.4442 20.3149C14.5361 19.8626 15.5282 19.1997 16.364 18.364C17.1997 17.5282 17.8626 16.5361 18.3149 15.4442C18.7672 14.3522 19 13.1819 19 12C19 10.8181 18.7672 9.64778 18.3149 8.55585C17.8626 7.46392 17.1997 6.47177 16.364 5.63604C15.5282 4.80031 14.5361 4.13738 13.4442 3.68508C12.3522 3.23279 11.1819 3 10 3M15 12L11 8L15 12ZM15 12L11 16L15 12ZM15 12H5H15Z" stroke="#181940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className={styles.button_text}>Войти, как пользователь</div>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.item}>
                        <td>Андрей</td>
                        <td>+7 999 999 99 99</td>
                        <td>pochtanova@gmail.com</td>
                        <td>11.06.2022</td>
                        <td>132 руб.</td>
                        <td>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Разблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H17ZM18 12L18.002 20H6V12H18Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Заблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 21C11.1819 21 12.3522 20.7672 13.4442 20.3149C14.5361 19.8626 15.5282 19.1997 16.364 18.364C17.1997 17.5282 17.8626 16.5361 18.3149 15.4442C18.7672 14.3522 19 13.1819 19 12C19 10.8181 18.7672 9.64778 18.3149 8.55585C17.8626 7.46392 17.1997 6.47177 16.364 5.63604C15.5282 4.80031 14.5361 4.13738 13.4442 3.68508C12.3522 3.23279 11.1819 3 10 3M15 12L11 8L15 12ZM15 12L11 16L15 12ZM15 12H5H15Z" stroke="#181940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className={styles.button_text}>Войти, как пользователь</div>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.item}>
                        <td>Андрей</td>
                        <td>+7 999 999 99 99</td>
                        <td>pochtanova@gmail.com</td>
                        <td>11.06.2022</td>
                        <td>132 руб.</td>
                        <td>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Разблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H17ZM18 12L18.002 20H6V12H18Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Заблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 21C11.1819 21 12.3522 20.7672 13.4442 20.3149C14.5361 19.8626 15.5282 19.1997 16.364 18.364C17.1997 17.5282 17.8626 16.5361 18.3149 15.4442C18.7672 14.3522 19 13.1819 19 12C19 10.8181 18.7672 9.64778 18.3149 8.55585C17.8626 7.46392 17.1997 6.47177 16.364 5.63604C15.5282 4.80031 14.5361 4.13738 13.4442 3.68508C12.3522 3.23279 11.1819 3 10 3M15 12L11 8L15 12ZM15 12L11 16L15 12ZM15 12H5H15Z" stroke="#181940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className={styles.button_text}>Войти, как пользователь</div>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.item}>
                        <td>Андрей</td>
                        <td>+7 999 999 99 99</td>
                        <td>pochtanova@gmail.com</td>
                        <td>11.06.2022</td>
                        <td>132 руб.</td>
                        <td>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Разблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H17ZM18 12L18.002 20H6V12H18Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Заблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 21C11.1819 21 12.3522 20.7672 13.4442 20.3149C14.5361 19.8626 15.5282 19.1997 16.364 18.364C17.1997 17.5282 17.8626 16.5361 18.3149 15.4442C18.7672 14.3522 19 13.1819 19 12C19 10.8181 18.7672 9.64778 18.3149 8.55585C17.8626 7.46392 17.1997 6.47177 16.364 5.63604C15.5282 4.80031 14.5361 4.13738 13.4442 3.68508C12.3522 3.23279 11.1819 3 10 3M15 12L11 8L15 12ZM15 12L11 16L15 12ZM15 12H5H15Z" stroke="#181940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className={styles.button_text}>Войти, как пользователь</div>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.item}>
                        <td>Андрей</td>
                        <td>+7 999 999 99 99</td>
                        <td>pochtanova@gmail.com</td>
                        <td>11.06.2022</td>
                        <td>132 руб.</td>
                        <td>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Разблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H17ZM18 12L18.002 20H6V12H18Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Заблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 21C11.1819 21 12.3522 20.7672 13.4442 20.3149C14.5361 19.8626 15.5282 19.1997 16.364 18.364C17.1997 17.5282 17.8626 16.5361 18.3149 15.4442C18.7672 14.3522 19 13.1819 19 12C19 10.8181 18.7672 9.64778 18.3149 8.55585C17.8626 7.46392 17.1997 6.47177 16.364 5.63604C15.5282 4.80031 14.5361 4.13738 13.4442 3.68508C12.3522 3.23279 11.1819 3 10 3M15 12L11 8L15 12ZM15 12L11 16L15 12ZM15 12H5H15Z" stroke="#181940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className={styles.button_text}>Войти, как пользователь</div>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.item}>
                        <td>Андрей</td>
                        <td>+7 999 999 99 99</td>
                        <td>pochtanova@gmail.com</td>
                        <td>11.06.2022</td>
                        <td>132 руб.</td>
                        <td>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Разблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H17ZM18 12L18.002 20H6V12H18Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Заблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 21C11.1819 21 12.3522 20.7672 13.4442 20.3149C14.5361 19.8626 15.5282 19.1997 16.364 18.364C17.1997 17.5282 17.8626 16.5361 18.3149 15.4442C18.7672 14.3522 19 13.1819 19 12C19 10.8181 18.7672 9.64778 18.3149 8.55585C17.8626 7.46392 17.1997 6.47177 16.364 5.63604C15.5282 4.80031 14.5361 4.13738 13.4442 3.68508C12.3522 3.23279 11.1819 3 10 3M15 12L11 8L15 12ZM15 12L11 16L15 12ZM15 12H5H15Z" stroke="#181940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className={styles.button_text}>Войти, как пользователь</div>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.item}>
                        <td>Андрей</td>
                        <td>+7 999 999 99 99</td>
                        <td>pochtanova@gmail.com</td>
                        <td>11.06.2022</td>
                        <td>132 руб.</td>
                        <td>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Разблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H17ZM18 12L18.002 20H6V12H18Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Заблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 21C11.1819 21 12.3522 20.7672 13.4442 20.3149C14.5361 19.8626 15.5282 19.1997 16.364 18.364C17.1997 17.5282 17.8626 16.5361 18.3149 15.4442C18.7672 14.3522 19 13.1819 19 12C19 10.8181 18.7672 9.64778 18.3149 8.55585C17.8626 7.46392 17.1997 6.47177 16.364 5.63604C15.5282 4.80031 14.5361 4.13738 13.4442 3.68508C12.3522 3.23279 11.1819 3 10 3M15 12L11 8L15 12ZM15 12L11 16L15 12ZM15 12H5H15Z" stroke="#181940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className={styles.button_text}>Войти, как пользователь</div>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.item}>
                        <td>Андрей</td>
                        <td>+7 999 999 99 99</td>
                        <td>pochtanova@gmail.com</td>
                        <td>11.06.2022</td>
                        <td>132 руб.</td>
                        <td>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Разблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H17ZM18 12L18.002 20H6V12H18Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Заблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 21C11.1819 21 12.3522 20.7672 13.4442 20.3149C14.5361 19.8626 15.5282 19.1997 16.364 18.364C17.1997 17.5282 17.8626 16.5361 18.3149 15.4442C18.7672 14.3522 19 13.1819 19 12C19 10.8181 18.7672 9.64778 18.3149 8.55585C17.8626 7.46392 17.1997 6.47177 16.364 5.63604C15.5282 4.80031 14.5361 4.13738 13.4442 3.68508C12.3522 3.23279 11.1819 3 10 3M15 12L11 8L15 12ZM15 12L11 16L15 12ZM15 12H5H15Z" stroke="#181940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className={styles.button_text}>Войти, как пользователь</div>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.item}>
                        <td>Андрей</td>
                        <td>+7 999 999 99 99</td>
                        <td>pochtanova@gmail.com</td>
                        <td>11.06.2022</td>
                        <td>132 руб.</td>
                        <td>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Разблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H17ZM18 12L18.002 20H6V12H18Z" fill="#181940" />
                                </svg>
                                <div className={styles.button_text}>Заблокировать</div>
                            </div>
                            <div className={styles.button}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 21C11.1819 21 12.3522 20.7672 13.4442 20.3149C14.5361 19.8626 15.5282 19.1997 16.364 18.364C17.1997 17.5282 17.8626 16.5361 18.3149 15.4442C18.7672 14.3522 19 13.1819 19 12C19 10.8181 18.7672 9.64778 18.3149 8.55585C17.8626 7.46392 17.1997 6.47177 16.364 5.63604C15.5282 4.80031 14.5361 4.13738 13.4442 3.68508C12.3522 3.23279 11.1819 3 10 3M15 12L11 8L15 12ZM15 12L11 16L15 12ZM15 12H5H15Z" stroke="#181940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className={styles.button_text}>Войти, как пользователь</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserList;