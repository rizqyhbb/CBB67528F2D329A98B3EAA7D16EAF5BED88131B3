import { MdLocationOn } from 'react-icons/md'

const Search = ({ onChange, value}) => {
  return (
    <div className="search">
      <MdLocationOn className='search__location-icon'/>
      <input className='search__input text-l' type="text" onChange={onChange} value={value}/>
    </div>
  )
}

export default Search;