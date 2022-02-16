import {MdClose} from 'react-icons/md'
const Modal = ({title, children, onClick}) => {
  return (
    <div className="modal">
      <div className='modal__icon-container'>
        <button className='modal__icon-btn' onClick={onClick}>
         <MdClose className='modal__close-icon'/>
        </button>
      </div>
      <p className='modal__title text-xl'>{title}</p>
      {children}
    </div>
  )
}

export default Modal;