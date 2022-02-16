import {MdLocationOn} from 'react-icons/md'
const List = ({ name, address, onClick}) => {
  return (
      <button className='list' onClick={onClick}>
        <div className='list__location-icon-container'>
          <MdLocationOn className='list__location-icon'/>
        </div>
        <div className='list__location-name-container'>
          <p className='list__location-name text-l'>{name}</p>
          <p className='list__location-detail text-m'>{address}</p>
        </div>
      </button>
  )
}

export default List;