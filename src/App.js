import { useEffect } from 'react'

import NavBar from "./components/NavBar";
import CartContainer from "./components/cart/CartContainer";
import { calculateTotals, getCartItems, myCart } from './features/cart/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal/Modal';
import { modalState } from './features/modal/modal.slice'
import ClipLoader from 'react-spinners/ClipLoader'
import BeatLoader from 'react-spinners/BeatLoader'


function App() {

  const { cartItems, isLoading } = useSelector(myCart)
  const { isOpen } = useSelector(modalState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [dispatch, cartItems]);

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='loading'>
        <ClipLoader size={200}/>
        <BeatLoader size={200}/>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        {isOpen && <Modal />}
        {/* {  <Modal />} */}
        <NavBar />
        <CartContainer />
      </header>
    </div>
  );
}


export default App;
