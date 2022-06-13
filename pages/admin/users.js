import Sidebar from "../../components/sidebar/Sidebar"
import UserList from "../../components/userList/UserList"

const users = () => {
    return (
        <>
            <Sidebar />
            <div className="content">
                <h1>Пользователи</h1>
                <div className="input_search">
                    <input type="text" placeholder="Поиск среди пользователей" />
                </div>
                <UserList />
            </div>
        </>
    );
}

export default users;