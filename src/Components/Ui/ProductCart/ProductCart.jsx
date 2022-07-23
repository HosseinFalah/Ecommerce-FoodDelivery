import { Link } from "react-router-dom";
import "./productCart.css";

import { useDispatch } from "react-redux"
import { cartAction } from "../../../Redux/Shopping/cartSlice"

const ProductCart = ({product}) => {
    const { id, title, image01, price } = product;

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartAction.addItem({
            id,
            title,
            image01,
            price
        }))
    }

    return (
        <>
            <div className="product__item">
                <img src={image01} className="product__img" alt="ProductImg" />
                <div className="product__content mt-2">
                    <h5 className="sub__title">
                        <Link to={`/foods/${id}`} className="product__title">{title}</Link>
                    </h5>
                    <div className="product__btns">
                        <span className="product__price">${price}</span>
                        <button className="add_to_cart" onClick={addToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCart