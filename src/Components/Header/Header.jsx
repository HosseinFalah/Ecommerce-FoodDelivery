import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from "react-router-dom";

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
    const toggleMenu = () => menuRef.current.classList.toggle("show__menu")


    return (
        <header className="navbar">
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
                        <span className="icon__shoppingcart">
                            <AiOutlineShoppingCart/>
                            <span className="icon__bage">1</span>
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