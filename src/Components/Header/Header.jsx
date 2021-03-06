import { useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../Redux/Shopping/cartUiSlice"

import logo from "../../Asset/images/res-logo.png";

import { GrMenu } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css"

const nav__links = [
    {name: "Home", path: "/home"},
    {name: "Foods", path: "/foods"},
    {name: "Cart", path: "/cart"},
    {name: "Contact", path: "/contact"},
]

const Header = () => {
    const menuRef = useRef(null)
    const stickyNavbar = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const dispatch = useDispatch()

    const toggleMenu = () => menuRef.current.classList.toggle("show__menu")

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
                stickyNavbar.current.classList.add("navbar__stiky")
            else stickyNavbar.current.classList.remove("navbar__stiky")
        })
    }, [])

    return (
        <header className="navbar" ref={stickyNavbar}>
            <div className="container">
                <div className="navbar__main">
                    <div className="navbar__logo">
                        <img src={logo} className="navbar__img" alt="logo"/>
                        <h5 className="navbar__brand">Tasty Treat</h5>
                    </div>
                    {/* ======= Menu ====== */}
                    <nav className="navbar__list" ref={menuRef}>
                        <ul className="navbar__menu">
                            {nav__links.map(category => (
                                <li className="navbar__menu-item" key={uuidv4()}>
                                    <NavLink
                                        onClick={toggleMenu}
                                        to={category.name} 
                                        className={navClass => navClass.isActive ? "active__menu" : "navbar__menu-link"}
                                    >
                                        {category.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Menu Icon */}
                    <div className="navbar__icons">
                        <span className="icon__shoppingcart" onClick={toggleCart}>
                            <AiOutlineShoppingCart/>
                            <span className="icon__bage">{totalQuantity}</span>
                        </span>
                        <span className="icon__user">
                            <BiUser/>
                        </span>
                        <span className="icon__menu" onClick={toggleMenu}>
                            <GrMenu/>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header