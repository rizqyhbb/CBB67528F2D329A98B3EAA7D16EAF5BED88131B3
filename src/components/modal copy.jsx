import {MdClose, MdLocationOn} from 'react-icons/md'
const Modal = ({title, onChange, value, name, address}) => {
  return (
    <div className="modal">
      <MdClose className='modal__close-icon'/>
      <p className='modal__title text-l'>{title}</p>
      <input className='modal__input' type="text" onChange={onChange} value={value}/>
      <MdLocationOn className='modal__search-location-icon'/>
      <div className='modal__location'>
      <MdLocationOn className='modal__location-icon'/>
      <p className='modal__location-name text-m'>{name}</p>
      <p className='modal__location-address text-s'>{address}</p>
      </div>
      <p className='footer'>Powered By Google</p>
    </div>
  )
}

export default Modal;