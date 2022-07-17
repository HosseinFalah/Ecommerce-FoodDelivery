import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//Icon
import { BsArrowRight } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";

//Components
import hero from "../Asset/images/hero.png";
import Feature from "../Components/Ui/Feature/Feature";
import Category from "../Components/Ui/Category/Category";
import ProductCart from "../Components/Ui/ProductCart/ProductCart";
import "./Home.css";

import products from "../Asset/fake-data/products";

import foodCategory_1 from "../Asset/images/hamburger.png";
import foodCategory_2 from "../Asset/images/pizza.png";
import foodCategory_3 from "../Asset/images/bread.png";


const Home = () => {

    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products)

    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(products);
        } else if (category === "BURGER") {
            const filteredProducts = products.filter(product => product.category === "Burger")
            setAllProducts(filteredProducts)
        } else if (category === "PIZZA") {
            const filteredProducts = products.filter(product => product.category === "Pizza")
            setAllProducts(filteredProducts)
        } else if (category === "BREAD") {
            const filteredProducts = products.filter(product => product.category === "Bread")
            setAllProducts(filteredProducts)
        }
    }, [category])

    return (
        <>
            <section>
                <div className="container">
                    <div className="main__row">
                        <div className="col">
                            <div className="main__content">
                                <h5>Easy Way To Make An Order</h5>
                                <h1 className="main__title">
                                    <span className="main__display">Hungry? </span>
                                    just wait <br/> food At
                                    <span className="main__display"> Your Door</span>
                                </h1>
                                <p className="main__description">
                                    Explore the flavors with our customizable platters. 
                                    Start with our fire-grilled citrus marinated chicken or choose from a variety of meats like our Mojo Roast Pork. 
                                    Pair with a side or two.
                                </p>
                                <div className="main__btns">
                                    <button className="btn btn__outline--danger">
                                        Order Now <BsArrowRight/>
                                    </button>
                                    <button className="btn btn__outline--danger">
                                        <Link to={"/foods"}>See All Foods</Link>
                                    </button>
                                </div>
                                <div className="main__icons">
                                    <p className="main__icon">
                                        <span className="service__icon">
                                            <AiFillCar className="icons" color="#fff" size={18}/>
                                        </span>
                                        No Shopping Charge 
                                    </p>
                                    <p className="main__icon">
                                        <span className="service__icon">
                                            <BiCheckShield className="icons" color="#fff" size={18}/>
                                        </span>
                                        100% Secure CheckOut
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="main__img">
                                <img src={hero} className="img__fluid" alt="main__img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Category/>
            <Feature/>
            <section>
                <div className="container">
                    <div className="d-flex">
                        <div className="col">
                            <h2 className="food__category-title">Popular Foods</h2>
                        </div>
                        <div className="col">
                            <div className="food__category">
                                <button className={`all_category ${category === "ALL" ? "food_btn_Active" : ""}`} onClick={() => setCategory("ALL")}>All</button>
                                <button className={`food__btn ${category === "BURGER" ? "food_btn_Active" : ""}`} onClick={() => setCategory("BURGER")}>
                                    <img src={foodCategory_1} className="food__img" alt="Burger" />
                                    Burger
                                </button>
                                <button className={`food__btn ${category === "PIZZA" ? "food_btn_Active" : ""}`} onClick={() => setCategory("PIZZA")}>
                                    <img src={foodCategory_2} className="food__img" alt="Pizza" />
                                    Pizza
                                </button>
                                <button className={`food__btn ${category === "BREAD" ? "food_btn_Active" : ""}`} onClick={() => setCategory("BREAD")}>
                                    <img src={foodCategory_3} className="food__img" alt="Bread" />
                                    Bread
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            {allProducts.map(product => (
                                <div className="col mt-2" key={uuidv4()}>
                                    <ProductCart product={product}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home