import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../Routers/Routers";
import { useLocation } from "react-router-dom";

const Layout = () => {
    const pathName = useLocation()
    document.title = `Food Ordering App - ${pathName.pathname.split("/")[1]}`
    return (
        <>
            <Header/>
                <main>
                    <Routes/>
                </main>        
            <Footer/>    
        </>
    )
}

export default Layout