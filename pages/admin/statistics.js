import Sidebar from "../../components/sidebar/Sidebar"
import UserList from "../../components/userList/UserList"
import PayList from "../../components/payList/PayList"
import React from "react";
import styles from "../../styles/Statistics.module.scss"

const useState = React.useState;

class statistics extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
          tab: 1,
        };
      }
 
render(){
    const tab = this.state.tab;
    return (
        <>
            <Sidebar />
            <div className="content">
                <h1>Общая статистика</h1>
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 7C6.2 7 3.5 9.7 3.5 13C3.5 14.984 4.477 16.75 5.969 17.844C3.61612 19.0111 1.90412 21.2959 1.56252 24.0023C1.49336 24.5503 1.94772 25 2.5 25C3.05228 25 3.49127 24.549 3.58156 24.0041C4.0533 21.1574 6.51544 19 9.5 19C12.4846 19 14.9467 21.1574 15.4184 24.0041C15.5087 24.549 15.9477 25 16.5 25C17.0523 25 17.4913 24.549 17.5816 24.0041C18.0533 21.1574 20.5154 19 23.5 19C26.4846 19 28.9467 21.1574 29.4184 24.0041C29.5087 24.549 29.9477 25 30.5 25C31.0523 25 31.5066 24.5503 31.4375 24.0023C31.096 21.2952 29.384 19.0111 27.031 17.844C27.7945 17.2877 28.416 16.5591 28.845 15.7174C29.274 14.8757 29.4984 13.9447 29.5 13C29.5 9.7 26.8 7 23.5 7C20.2 7 17.5 9.7 17.5 13C17.5 14.984 18.477 16.75 19.969 17.844C18.5079 18.5623 17.2986 19.7062 16.5 21.125C15.7014 19.7062 14.4921 18.5623 13.031 17.844C13.7945 17.2877 14.416 16.5591 14.845 15.7174C15.274 14.8757 15.4984 13.9447 15.5 13C15.5 9.7 12.8 7 9.5 7ZM9.5 9C11.723 9 13.5 10.777 13.5 13C13.5 15.223 11.723 17 9.5 17C7.277 17 5.5 15.223 5.5 13C5.5 10.777 7.277 9 9.5 9ZM23.5 9C25.723 9 27.5 10.777 27.5 13C27.5 15.223 25.723 17 23.5 17C21.277 17 19.5 15.223 19.5 13C19.5 10.777 21.277 9 23.5 9Z" fill="#181940" />
                            </svg>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.title}>21 пользователь</div>
                            <div className={styles.subtitle}>Всего</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.icon}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_119_1226)">
                                    <path d="M9.1053 1.37982C8.03684 0.762947 6.64861 1.13492 6.03174 2.20338L0.781738 11.2966C0.164863 12.3651 0.536837 13.7533 1.6053 14.3702L15.8947 22.6202C16.9632 23.2371 18.3514 22.8651 18.9683 21.7966L24.2183 12.7034C24.8351 11.6349 24.4632 10.2467 23.3947 9.62982L9.1053 1.37982ZM8.3553 2.67886L22.6447 10.9289C23.0117 11.1407 23.1311 11.5864 22.9192 11.9534L22.1692 13.2524L7.2303 4.62742L6.4803 5.92646L21.4192 14.5515L17.6692 21.0466C17.4574 21.4136 17.0117 21.533 16.6447 21.3212L2.3553 13.0712C1.98832 12.8593 1.8689 12.4136 2.08078 12.0466L7.33078 2.95338C7.54265 2.5864 7.98832 2.46698 8.3553 2.67886Z" fill="#181940" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_119_1226">
                                        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.title}>1 131 523 руб.</div>
                            <div className={styles.subtitle}>Поступлений за 7 дней</div>
                        </div>
                    </div>
                </div>
                <div className={styles.tabs}>
                    <div className={this.state.tab == '1' ? styles.active + ' ' + styles.tab : styles.tab} onClick={() => this.setState({ tab: '1' })}>Последние платежи</div>
                    <div className={this.state.tab == '2' ? styles.active + ' ' + styles.tab : styles.tab} onClick={() => this.setState({ tab: '2' })}>Новые пользователи</div>
                </div>
                {this.state.tab == '1' ? <PayList /> : <UserList />}
                
            </div>
        </>
    );

}
}
export default statistics;