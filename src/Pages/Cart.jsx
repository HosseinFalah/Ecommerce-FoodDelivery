import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";
import Table from "./Table";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <>
            <section className="food__store">
                <div className="container"> 
                    <h2 className="text-white">Your Cart</h2>
                </div>
            </section>
            <section className="mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {
                                cartItems.length === 0 ? <h2 className="mb-2">Your Cart Is empty</h2>
                                    :   
                                <table className="table mb-2">
                                    <thead>
                                        <tr>
                                            <th>#Id</th>
                                            <th>Image</th>
                                            <th>Product Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    {
                                        cartItems.map((item) => (
                                            <tbody key={uuidv4()}>                                        
                                                <Table item={item}/>
                                            </tbody>
                                        ))                
                                    }
                                </table>
                            }
                            <div>
                                <h6 className="cart__price">SubTotal: <span className="product__price">${totalAmount}</span></h6>
                                <p>Taxes and shipping will calculate at checkout</p>
                                <div className="table__btn">
                                    <button className="btn btn__outline--danger"><Link to={"/foods"}>Continue Shopping</Link></button>
                                    <button className="btn btn__outline--danger"><Link to={"/checkout"}>Proceed To checkout</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart