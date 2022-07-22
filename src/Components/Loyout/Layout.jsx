import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../Routers/Routers";
import Carts from "../Ui/cart/Carts";
import { useSelector } from "react-redux";

const Layout = () => {
    const showCart = useSelector(state => state.cartUi.cartIsVisible)

    const pathName = useLocation()
    document.title = `Food Ordering App - ${pathName.pathname.split("/")[1]}`
    return (
        <>
            <Header/>
                {
                    showCart && <Carts/>
                }
                <main className="p-2">
                    <Routes/>
                </main>        
            <Footer/>    
        </>
    )
}

export default Layout