import { v4 as uuidv4 } from 'uuid';
import "./Category.css";

import category_1 from "../../../Asset/images/category-01.png";
import category_2 from "../../../Asset/images/category-02.png";
import category_3 from "../../../Asset/images/category-03.png";
import category_4 from "../../../Asset/images/category-04.png";

const categoryData = [
    {display: "FastFood", imgUrl: category_1},
    {display: "Pizza", imgUrl: category_2},
    {display: "Asian Food", imgUrl: category_3},
    {display: "Row Meat", imgUrl: category_4}
]

const Category = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    {categoryData.map(category => (
                        <div className="col" key={uuidv4()}>
                            <div className="main__category" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1500" data-aos-offset="500">
                                <div className="main__category-img">
                                    <img src={category.imgUrl} alt={category.display} />
                                </div>
                                <h6 className="main__category-title">{category.display}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Category