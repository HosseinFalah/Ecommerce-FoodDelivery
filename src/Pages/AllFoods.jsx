import { v4 as uuidv4 } from "uuid"
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import products from "../Asset/fake-data/products";
import ProductCart from "../Components/Ui/ProductCart/ProductCart";
import ReactPaginate from "react-paginate";

import "./AllFoods.css";

const AllFoods = () => {
    const [search, setSearch] = useState("")

    const searchProduct = products.filter(item => {
        if (item.value === "") return item
        if (item.title.toLowerCase().includes(search.toLowerCase())) 
        return item
    })

    const [pageNumber, setPageNumber] = useState(0)
    const productPage = 8
    const visitedPage = pageNumber * productPage
    const displayPage = searchProduct.slice(visitedPage, visitedPage + productPage)

    const pageCount = Math.ceil(searchProduct.length / productPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <>
            <section className="food__store">
                <div className="container">
                    <h2 className="text-white">All Foods</h2>
                </div>
            </section>
            <section className="container">
                    <div className="row mt-2">
                        <div className="col">
                            <div className="food__search">
                                <input type="text" value={search} onChange={(e) => setSearch(e.target.value.trim())} placeholder="I'M Looking" />
                                <AiOutlineSearch/>
                            </div>
                        </div>
                        <div className="col mb-2">
                            <div className="food__sorting">
                                <select className="sorting__select">
                                    <option>Default</option>
                                    <option value="ascending">Alphabetically, A-Z</option>
                                    <option value="descending">Alphabetically, Z-A</option>
                                    <option value="high-price">high Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row__card mb-2">
                        {displayPage.map(item => <ProductCart product={item} key={uuidv4()}/>)}
                    </div>
                    <ReactPaginate
                        pageCount={pageCount}
                        onPageChange={changePage}
                        prevPageRel="Prev"
                        nextLabel="Next"
                        containerClassName="pageinationbtn mb-2"
                    />
            </section>
        </>
    )
}

export default AllFoods