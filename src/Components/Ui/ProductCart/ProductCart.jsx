import { Link } from "react-router-dom";
import "./productCart.css";

const ProductCart = ({product}) => {
    const { id, title, image01, price } = product
    return (
        <>
            <div className="product__item">
                <img src={image01} className="product__img" alt="ProductImg" />
                <div className="product__content mt-2">
                    <h5 className="sub__title">
                        <Link to={`/food/${id}`} className="product__title">{title}</Link>
                    </h5>
                    <div className="product__btns">
                        <span className="product__price">${price}</span>
                        <button className="add_to_cart">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCart