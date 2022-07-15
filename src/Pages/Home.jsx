import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import hero from "../Asset/images/hero.png";
import "./Home.css";

const Home = () => {
    return (
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
    )
}

export default Home