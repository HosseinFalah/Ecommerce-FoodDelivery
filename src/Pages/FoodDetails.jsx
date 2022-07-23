import { useState } from "react"
import { useParams } from "react-router-dom";

import products from "../Asset/fake-data/products";

import "./FoodDetails.css"

const FoodDetails = () => {
    const [tab, setTab] = useState('desc');
    const {id} = useParams()


    const product = products.find(product => product.id === id);
    const [previewImg, setPreviewImg] = useState(product.image01)
    const { title, price, category, desc } = product

    return (
        <>
            <section className="food__store">
                <div className="container"> 
                    <h2 className="text-white">Product {id.split("")[1]}</h2>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
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
                                <h2 className="mb-2">{title}</h2>
                                <span className="product__price">Price: ${price}</span>
                                <p className="mt-2">Category: <span className="badge">{category}</span></p>
                                <button className="btn btn__outline--danger mt-2">Add To Cart</button>
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
                                <p>{desc}</p>
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
                                    <form className="tab__form">
                                        <div className="form__group">
                                            <input type="text" className="form__controll" placeholder="Enter Your Name"/>
                                        </div>
                                        <div className="form__group">
                                            <input type="text" className="form__controll" placeholder="Enter Your Name"/>
                                        </div>
                                        <div className="form__group">
                                            <textarea type="text" rows={5} className="form__controll" placeholder="Enter Your Name"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn__outline--danger">Submit</button>
                                    </form> 
                                 </>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default FoodDetails