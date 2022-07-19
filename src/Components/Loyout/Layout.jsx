import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../Routers/Routers";

const Layout = () => {
    const pathName = useLocation()
    document.title = `Food Ordering App - ${pathName.pathname.split("/")[1]}`
    return (
        <>
            <Header/>
                <main className="p-2">
                    <Routes/>
                </main>        
            <Footer/>    
        </>
    )
}

export default Layout