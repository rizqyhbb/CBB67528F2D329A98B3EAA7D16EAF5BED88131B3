import { MdArrowBack, MdExpandMore } from 'react-icons/md'

const Navbar = ({content, onClick}) => {
  return (
    <nav className="navbar">
      <MdArrowBack className="navbar__action" />
      <div className="navbar__location">
        <button onClick={onClick}>
          <p className="navbar__location-title text-xs">ALAMAT PENGANTAR</p>
          <p className="navbar__location-content text-l">{content}</p>
          <MdExpandMore className="navbar__location-arrow" />
        </button>
      </div>
    </nav>

  )
}

export default Navbar