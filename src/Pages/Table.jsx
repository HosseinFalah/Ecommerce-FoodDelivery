import { FiTrash } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { cartAction } from "../Redux/Shopping/cartSlice";

const Table = ({item}) => {
    const { id, image01, title, price, quantity } = item

    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(cartAction.removeItem(id))
    }

    return (
        <tr>
            <td>{id}</td>
            <td><img src={image01} className="table__img" alt=""/></td>
            <td>{title}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td onClick={deleteItem}><FiTrash color={"#fff"} size={25} className="table__trash"/></td>
        </tr>
    )
}

export default Table