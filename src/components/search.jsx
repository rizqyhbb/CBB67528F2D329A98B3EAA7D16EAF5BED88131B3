import { MdLocationOn } from 'react-icons/md'

const Search = ({ onChange, value, placeholder}) => {
  return (
    <div className="search">
      <MdLocationOn className='search__location-icon'/>
      <input className='search__input text-l' type="text" onChange={onChange} value={value} placeholder={placeholder}/>
    </div>
  )
}

export default Search;