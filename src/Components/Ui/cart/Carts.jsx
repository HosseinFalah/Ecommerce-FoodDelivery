import { v4 as uuidv4 } from "uuid";

import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux"
import { cartUiActions } from "../../../Redux/Shopping/cartUiSlice"
import "./Carts.css";

const Carts = () => {

    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }

    return (
        <div className="cart__container">
            <div className="cart">
                <AiOutlineClose className="cart__close" onClick={toggleCart}/>
                <div className="cart_item-list">
                    {cartProducts.length === 0 ? (
                        <h6 className="cart__item-title">No Item Added to The Cart</h6>
                    ) : (
                        cartProducts.map((item) => (
                            <CartItem item={item} key={uuidv4()}/>
                        ))
                    )}
                </div>
                <div className="cart__bottom">
                    <h6 className="cart__totalPrice">Subtotal Amount: <span>${totalAmount}</span></h6>
                    <button className="cart__checkout"><Link to={"/checkout"}>Checkout</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Carts