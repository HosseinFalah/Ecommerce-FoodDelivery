import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const loginNameRef = useRef();
    const loginPasswordRef = useRef();

    const submitHandle = e => {
        e.preventDefault();
    }

    return (
        <>
            <section className="food__store">
                <div className="container">
                    <h2 className="text-white">Login</h2>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="login__form">
                                <form onSubmit={submitHandle}>
                                    <div className="form__group">
                                        <input type="email" placeholder="Email" className="form__controll" ref={loginNameRef} required/>
                                    </div>
                                    <div className="form__group">
                                        <input type="password" placeholder="Password" className="form__controll" ref={loginPasswordRef} required/>
                                    </div>
                                    <button type="submit" className="btn btn__outline--danger">Login</button>
                                </form>
                                <Link to={"/register"} className="login__register">Already have an Account? Create an Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login