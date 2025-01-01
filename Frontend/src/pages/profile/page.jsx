import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LuSmile } from 'react-icons/lu'
import authServices from "../../services/auth"
import orderServices from "../../services/order"
import styles from './page.module.css'

export default function Profile() {
    const { logout } = authServices()
    const { getUserOrders, orderLoading, refetchOrders, ordersList } = orderServices()
    const navigate = useNavigate()
    const authData = JSON.parse(localStorage.getItem('auth'))

    useEffect(() => {
        if(!authData) {
            navigate('/auth')
        } else if (refetchOrders) {
            getUserOrders(authData?.user?._id)

        }
    }, [authData, refetchOrders])

    if(orderLoading) {
        return <h1>Loading...</h1>}


    const handleLogout = () => { 
        logout()
        navigate('/')
    }


    return (
        <>
            <div className={styles.profileContainer}>
                
                <div className={styles.userInfo}>
                    <div>
                        <LuSmile className={styles.smileLogo} />
                    </div>
                    <div className={styles.userData}>
                        <h3>{authData?.user?.fullname}</h3>
                        <p>{authData?.user?.email}</p>
                    </div>
                </div>
                <button onClick={handleLogout} className={styles.btnLogout}>Logout</button>
            </div>

            <div className={styles.ordersContent}>
                <h1 className={styles.ordersTitle}>My Orders</h1>
                {ordersList.length > 0 ?
                    <div className={styles.ordersContainer}>
                        {ordersList.map((order) => (
                            <div key={order._id} className={styles.orderContainer}>
                                <p>{order.pickupStatus}</p>
                                <p>{order.pickupTime}</p>
                                {order.orderItems.map((item) => (
                                    <div key={item._id} className={styles.orderData}>
                                        <p><strong>{item.itemDetails[0].name}</strong></p>
                                        <p>QUANTITY: <strong>{item.quantity}</strong></p>
                                    </div>    
                                ))}
                            </div>
                        ))}

                    </div>
                :
                    <div>
                        <h1>You don't have orders yet!</h1>
                    </div>
                }           
            </div>
        </>
    )
}