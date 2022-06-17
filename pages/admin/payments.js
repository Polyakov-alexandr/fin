import Sidebar from "../../components/sidebar/Sidebar"
import PayList from "../../components/payList/PayList"


const payments = () => {
    return (
        <>
            <Sidebar />
            <div className="content">
                <h1>Платежи</h1>
                <div className="input_search">
                    <input type="text" placeholder="Поиск среди платежей" />
                </div>
                <PayList />
            </div>
        </>
    );
}

export default payments;