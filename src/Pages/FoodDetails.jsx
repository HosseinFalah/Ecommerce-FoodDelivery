import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import products from "../Asset/fake-data/products";

import ProductCart from "../Components/Ui/ProductCart/ProductCart";

import { useDispatch } from "react-redux";
import { cartAction } from "../Redux/Shopping/cartSlice";
import "./FoodDetails.css"

const FoodDetails = () => {
    const [tab, setTab] = useState('desc');
    const {id} = useParams();
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMesseage, setUserMesseage] = useState("");
    const dispatch = useDispatch();

    const product = products.find(product => product.id === id);
    const [previewImg, setPreviewImg] = useState(product.image01)
    const { title, price, category, desc, image01 } = product

    const relatedProduct = products.filter(item => category === item.category)

    const addItem = () => {
        dispatch(cartAction.addItem({
            id, title, price, image01
        }))
    }

    const submitHandler = e => {
        e.preventDefault();
    }

    useEffect(() => {
        setPreviewImg(product.image01)
    }, [product])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <>
            <section className="food__store">
                <div className="container"> 
                    <h2 className="text-white">Product {id.split("")[1]}</h2>
                </div>
            </section>
            <section className="mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row__details">
                                <div onClick={() => setPreviewImg(product.image01)}>
                                    <img src={product.image01} className="img__details" alt="" />
                                </div>
                                <div onClick={() => setPreviewImg(product.image02)}>
                                    <img src={product.image02} className="img__details" alt="" />
                                </div>
                                <div onClick={() => setPreviewImg(product.image03)}>
                                    <img src={product.image03} className="img__details" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product__images">
                                <img src={previewImg} className="product__images-details" alt=""/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="product__details">
                                <h2 className="details__title mb-2">{title}</h2>
                                <span className="product__price">Price: ${price}</span>
                                <p className="mt-2">Category: <span className="badge">{category}</span></p>
                                <button onClick={addItem} className="btn btn__outline--danger mt-2">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tabs">
                            <h6 className={`${tab === "desc" ? "tab__active" : ""}`} onClick={() => setTab("desc")}>Description</h6>
                            <h6 className={`${tab === "rev" ? "tab__active" : ""}`} onClick={() => setTab("rev")}>Review</h6>
                        </div>
                        {tab === "desc" ? ( 
                            <div className="tab__content">
                                <p className="product__desc">{desc}</p>
                            </div>
                            ) : (
                                <>
                                    <div className="review__text mb-2 mt-2">
                                        <p className="user__name">Jhon Doe</p>
                                        <p className="user__email">hosseinfalah2021@gmail.com</p>
                                        <p className="feedback__text">great product</p>
                                    </div>
                                    <div className="review__text mb-2">
                                        <p className="user__name">Jhon Doe</p>
                                        <p className="user__email">hosseinfalah2021@gmail.com</p>
                                        <p className="feedback__text">great product</p>
                                    </div>
                                    <div className="review__text mb-2">
                                        <p className="user__name">Jhon Doe</p>
                                        <p className="user__email">hosseinfalah2021@gmail.com</p>
                                        <p className="feedback__text">great product</p>
                                    </div>
                                    <form className="tab__form" onSubmit={submitHandler}>
                                        <div className="form__group">
                                            <input 
                                                type="text"
                                                className="form__controll"
                                                onChange={(e) => setUserName(e.target.value)}
                                                value={userName}
                                                placeholder="Enter Your Name"
                                                required
                                                />
                                        </div>
                                        <div className="form__group">
                                            <input 
                                                type="text"
                                                className="form__controll"
                                                onChange={(e) => setUserEmail(e.target.value)}
                                                value={userEmail}
                                                placeholder="Enter Your Email"
                                                required
                                                />
                                        </div>
                                        <div className="form__group">
                                            <textarea 
                                                type="text"
                                                rows={5} className="form__controll"
                                                onChange={(e) => setUserMesseage(e.target.value)}
                                                value={userMesseage}
                                                placeholder="Enter Your Message"
                                                required
                                                ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn__outline--danger">Submit</button>
                                    </form> 
                                </>
                            )
                        }
                    </div>
                    <div className="col">
                        <h2 className="products__title">You might also like</h2>
                    </div>
                    <div className="row mb-2">
                        {
                            relatedProduct.map(item => (
                                <ProductCart product={item} key={uuidv4()}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default FoodDetails