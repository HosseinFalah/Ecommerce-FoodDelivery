import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../Redux/Shopping/cartSlice";
import "./CartItem.css";

const CartItem = ({item}) => {

    const { id, title, price, image01, quantity, totalPrice } = item

    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(cartAction.addItem({
            id, title, price, image01
        }))
    }

    const decrementItem = () => {
        dispatch(cartAction.removeItem(id))
    }

    return (
        <div className="cart__product">
                <img src={image01} className="cart__product-img" alt="product-img" />
                <h6 className="cart_product-title">{title}</h6>
                <p>x {quantity}</p>
                <div className="cart__product-btn">
                    <button className="cart__btn" onClick={incrementItem}><AiOutlinePlus/></button>
                    <span className="btn__counter">{quantity}</span>
                    <button className="cart__btn" onClick={decrementItem}>{quantity > 1 ? <AiOutlineMinus/> : <BsTrash className="btn__trash"/>}</button>
                </div>
                <p className="cart__product-price">${totalPrice}</p>
        </div>
    )
}

export default CartItem