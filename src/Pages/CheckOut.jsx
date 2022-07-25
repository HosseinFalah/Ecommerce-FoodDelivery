import { useState } from "react";
import { useSelector } from "react-redux";
import "./CheckOut.css"

const CheckOut = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userNumber, setUserNumber] = useState("");
    const [userCountry, setUserCountry] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userPostalCode, setUserPostalCode] = useState("");

    const shoppingInfo = []

    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    const shoppingCost = 30
    const totalAmount = cartTotalAmount + Number(shoppingCost)

    const submitHandler = (e) => {
        e.preventDefault();
        const userShoppingAddress = {
            name: userName,
            email: userEmail,
            phone: userNumber,
            country: userCountry,
            city: userCity,
            postalCode: userPostalCode,
        }
        shoppingInfo.push(userShoppingAddress)
        console.log(shoppingInfo);
    }

    return (
        <>
            <section className="food__store">
                <div className="container"> 
                    <h2 className="text-white">CheckOut</h2>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4 className="mt-2">Shopping Address</h4>
                            <form className="checkout__form mt-2" onSubmit={submitHandler} autoComplete="off">
                                <div className="form__group">
                                    <input type="text" className="form__controll" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter Your Name" required/>
                                </div>
                                <div className="form__group">
                                    <input type="email" className="form__controll" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter Your Email" required/>
                                </div>
                                <div className="form__group">
                                    <input type="number" className="form__controll" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} placeholder="Phone Number" required/>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__controll" value={userCountry} onChange={(e) => setUserCountry(e.target.value)} placeholder="Country" required/>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__controll" value={userCity} onChange={(e) => setUserCity(e.target.value)} placeholder="City" required/>
                                </div>
                                <div className="form__group">
                                    <input type="number" className="form__controll" value={userPostalCode} onChange={(e) => setUserPostalCode(e.target.value)} placeholder="Postal Code" required/>
                                </div>
                                <button className="btn btn__outline--danger mb-2" type="submit">Payment</button>
                            </form>
                        </div>
                        <div>
                            <div className="checkout__fill">
                                <h2 className="total__Amount">Subtotal: <span className="checkout__flex">${cartTotalAmount}</span></h2>
                                <h3 className="total__Cost">Shopping: <span className="checkout__flex">${shoppingCost}</span></h3>
                                <h4 className="total__Price">Total: <span className="checkout__flex">${totalAmount}</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckOut