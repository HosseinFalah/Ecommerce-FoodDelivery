import { useRef } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const signupNameRef = useRef();
    const signupPasswordRef = useRef();
    const signupEmailRef = useRef();

    const submitHandle = e => {
        e.preventDefault();
    }

    return (
        <>
            <section className="food__store">
                <div className="container">
                    <h2 className="text-white">Register</h2>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="login__form">
                                <form onSubmit={submitHandle}>
                                    <div className="form__group">
                                        <input type="text" placeholder="Full Name" className="form__controll" ref={signupNameRef} required/>
                                    </div>
                                    <div className="form__group">
                                        <input type="email" placeholder="Email" className="form__controll" ref={signupEmailRef} required/>
                                    </div>
                                    <div className="form__group">
                                        <input type="password" placeholder="Password" className="form__controll" ref={signupPasswordRef} required/>
                                    </div>
                                    <button type="submit" className="btn btn__outline--danger">Sign Up</button>
                                </form>
                                <Link to={"/login"} className="login__register">Already have an Account? Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register