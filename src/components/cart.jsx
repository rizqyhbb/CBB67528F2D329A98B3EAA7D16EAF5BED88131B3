import {MdArrowForwardIos, MdOutlineShoppingCart} from 'react-icons/md'

const Cart = ({item, totalPrice}) => {
  return (
    <div className="cart">
      <button className="cart__button">
        <div className='cart__button-label'>
          <p className="cart__button-description text-m">{item} Items | Rp {totalPrice}</p>
          <p className="text-s">Termasuk ongkos kirim</p>
        </div>
        <div className='cart__button-icon'>
        <MdOutlineShoppingCart className='cart__button-icon-shoppingcart'/>
        <MdArrowForwardIos className='cart__button-icon-arrow'/>
        </div>
      </button>
    </div>
  )
}

export default Cart