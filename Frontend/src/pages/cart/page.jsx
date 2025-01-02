import { useState } from "react"
import { useCartContext } from "../../Contexts/useCartContext"
import styles from './page.module.css'
import { LuCircleMinus } from 'react-icons/lu'
import ConfirmOrderPopup from "../../Components/confirmOrderPopup/confirmOrderPopup"
import orderServices from "../../services/order"
import { Link } from "react-router-dom"

export default function Cart() {

    const { cartItems, updateCartItems, removeFromCart, clearCart } = useCartContext()
    const [confirmPopupOpen, setConfirmPopupOpen] = useState(false)
    const { sendOrder } = orderServices()

    const handleOpenPopup = (e) => {
        e.preventDefault()
        setConfirmPopupOpen(!confirmPopupOpen)
    }
    const handleConfirmOrder = (orderData) => {
        orderData.items = cartItems.map((item) => {
            return { plateId: item._id, quantity: item.quantity}
        })
        sendOrder(orderData)
        setConfirmPopupOpen(!confirmPopupOpen)
        clearCart()
    }

    const handleChangeItemQnty = (mode, itemId) => {
        const updatedCartItem = cartItems.map((item) => {
            if(item._id === itemId) {
                if(mode === 'less' && item.quantity > 1) {
                    item.quantity -= 1
                } else if (mode === 'more') {
                    item.quantity += 1
                }
            }

            return item
        })

        updateCartItems(updatedCartItem)
    }

    if(!cartItems.length) {
        return(
            <div>
                <h1>Your cart is empty... :/</h1>
                <Link to={'/plates'}><button >See our specialities</button></Link>
                
            </div>
        )
    }

    return (
        <>
            <div className={styles.pageContainer}>
                <h1 className={styles.title}>Your items: </h1>
                <section>
                    <div className={styles.itemsListContainer}>
                        {cartItems.map((item) => (
                            <div className={styles.itemContainer} key={item._id}>
                                <img src={item.imgUrl} alt="" />
                                <div className={styles.itemContent}>
                                    <h2>{item.name}</h2>
                                    <p>{[String(item.ingredients)]}</p>
                                    <p>{item.description}</p>
                                    <div className={styles.portionsContainer}>
                                        <p>Portions:</p>
                                        <p>{item.quantity}</p>
                                        <div className={styles.portionsButtons}>
                                            <button onClick={() => {handleChangeItemQnty('less', item._id)}}>-</button>
                                            <button onClick={() => {handleChangeItemQnty('more', item._id)}}>+</button>
                                        </div>
                                    </div>
                                    <button onClick={() => { removeFromCart(item._id) }} className={styles.btnRemove}> <LuCircleMinus /> Remove item</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <div className={styles.confirmButton}>
                    <button onClick={handleOpenPopup}>Confirm your order!</button>
                </div>
            </div>

            <ConfirmOrderPopup open={confirmPopupOpen} onClose={handleOpenPopup} onConfirm={handleConfirmOrder}/>
        </>
    )
}