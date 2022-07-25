import { v4 as uuidv4 } from "uuid";
import "./Feature.css";

import service_1 from "../../../Asset/images/service-01.png";
import service_2 from "../../../Asset/images/service-02.png";
import service_3 from "../../../Asset/images/service-03.png";

const featuerData = [
    {
        title: "Quick Delivery",
        imgUrl: service_1,
        desc: "Tender USDA Choice Churrasco Steak seasoned & grilled to perfection for rich flavor",
        Miuns: "doloremque"
    },
    {
        title: "Super Dine In",
        imgUrl: service_2,
        desc: "Enjoy our fresh, tender, citrus-marinated chicken covered in our lightly seasoned breading",
        Miuns: "doloremque"
    },
    {
        title: "Easy Pick Up",
        imgUrl: service_3,
        desc: "This platter of grilled favorites features Churrasco Steak with Chimichurri, ¼ Citrus-Marinated",
        Miuns: "doloremque"
    }
]

const Feature = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div>
                        <div className="text-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <h5 className="feature__subtitle">What We Serve</h5>
                            <h2 className="feature__title">Just Sit Back at Home</h2>
                            <h2 className="feature__title">We Will <span>Task Care</span></h2>
                            <div className="feature__description">
                                <p className="feature__text">Slow roasted in a juice blend, our roast pork is crowned with sautéed onions?</p>
                                <p className="feature__text">For big appetites, this dish doubles up the delicious offering with 1/2 of a grilled chicken?</p>
                            </div>
                        </div>
                        <div className="feature__box">
                            {featuerData.map(feature => (
                                <div className="feature__item" key={uuidv4()} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                                    <img src={feature.imgUrl} className="feature__img" alt={feature.title} />
                                    <h5 className="feature__title">{feature.title}</h5>
                                    <p className="feature__description">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature