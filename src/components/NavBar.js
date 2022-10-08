import { useSelector } from "react-redux";
import { myCart } from "../features/cart/cart.slice";

import { CartIcon } from "../icons";


const NavBar = () => {
    const {totalCartItems} = useSelector(myCart)
    // console.log(totalCartItems)


    return (
        <nav>
            <div className="nav-center">
                <h3>Redux Tookit Tuts </h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{totalCartItems}</p>
                    </div>
                </div>
            </div>
        </nav>

    )

}

export default NavBar