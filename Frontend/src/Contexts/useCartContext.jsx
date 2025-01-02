
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (itemToAdd) => {
        const checkItemalready = cartItems.find((cartItem) => {
            return cartItem._id === itemToAdd._id
        })

        if(!checkItemalready) {
            itemToAdd.quantity = 1

            setCartItems([...cartItems, itemToAdd])
            console.log('Item added correctly')
        } else {
            console.log('Item is already on cart')
        }
        console.log(cartItems)
    }

    const updateCartItems = (items) => {
        setCartItems(items)
    } 

    const removeFromCart = (itemId) => {
        const cartItemsSanitized = cartItems.filter((item) => {
            return item._id !== itemId
        })
        
        setCartItems(cartItemsSanitized)
    }

    return(
        <CartContext.Provider value={{ removeFromCart, addToCart, cartItems, updateCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContext)

    if(!context) {
        console.log('you are out of CartContext')
    }

    return context
}