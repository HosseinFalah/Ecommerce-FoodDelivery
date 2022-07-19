import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//Icon
import { BsArrowRight } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

//Components
import hero from "../Asset/images/hero.png";
import Feature from "../Components/Ui/Feature/Feature";
import Category from "../Components/Ui/Category/Category";
import ProductCart from "../Components/Ui/ProductCart/ProductCart";
import TestimonialSlider from "../Components/Ui/Slider/TestimonialSlider";
import "./Home.css";

// get Point Api
import products from "../Asset/fake-data/products";

// Img Banner
import foodCategory_1 from "../Asset/images/hamburger.png";
import foodCategory_2 from "../Asset/images/pizza.png";
import foodCategory_3 from "../Asset/images/bread.png";

import whyImg from "../Asset/images/location.png";
import netWorkImg from "../Asset/images/network.png";

const Home = () => {

    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);

    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        const filteredPizaa = products.filter(item => item.category === "Pizza")
        const slicePizza = filteredPizaa.slice(0, 4)
        setHotPizza(slicePizza)
    }, [])

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
                            <div className="main__content mt-2">
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
            <section>
                <div className="container">
                    <div className="main__row mb-2">
                        <div className="col">
                            <img src={whyImg} className="img__fluid" alt="why_tasty_treat" />
                        </div>
                        <div className="col">
                            <div className="why__tasty-treat">
                                <h2 className="why__tasty-title">Why <span>Tasty Treat?</span></h2>
                                <p className="mt-2 why__tasty-description">The brand is present in many ready-to-eat indulgence categories, from biscuits to namkeens,
                                    beverages, sauces, ready-to-eat snacks, frozen snacks, candies, mithai and more. No matter
                                    which category you try, Tasty Treat assures you of high quality deliciousness! Chak Chak
                                    Chabao!
                                </p>
                                <div className="tasty__listgroup mt-2">
                                    <div className="tasty__listgroup-item">
                                        <p className="tasty__title">
                                            <AiOutlineCheckCircle color="#df2020" fontSize={20}/>
                                            Fresh and tasty foods
                                        </p>
                                        <p className="mt-2 tasty__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="tasty__listgroup-item">
                                        <p className="tasty__title">
                                            <AiOutlineCheckCircle color="#df2020" fontSize={20}/>
                                            Quality support
                                        </p>
                                        <p className="mt-2 tasty__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="tasty__listgroup-item">
                                        <p className="tasty__title">
                                            <AiOutlineCheckCircle color="#df2020" fontSize={20}/>  
                                            Order from any location
                                        </p>
                                        <p className="mt-2 tasty__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="col">
                        <div className="col mt-2 mx-auto">
                            <h2 className="mb-2">Hot Pizza</h2>
                        </div>
                        <div className="row">
                        {hotPizza.map(product => (
                            <ProductCart key={uuidv4()} product={product}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="main__row">
                        <div className="col">
                            <div className="testimonial mt-2">
                                <h5 className="testimonial__subtirle mb-2">Testimonial</h5>
                                <h2 className="testimonial_title mb-2">What our <span>customers</span> are saying</h2>
                                <p className="testimonial_description"> 
                                    You should always include testimonials in your copy. The reader finds it easier to believe the endorsement of a fellow consumer than the puffery of an anonymous copywriter.
                                </p>
                            </div>
                            <TestimonialSlider/>
                        </div>
                        <div className="col">
                            <img src={netWorkImg} className="img__fluid" alt="NetWork" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home