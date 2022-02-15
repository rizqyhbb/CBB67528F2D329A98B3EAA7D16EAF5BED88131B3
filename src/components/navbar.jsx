const Navbar = ({content}) => {
  return (
    <nav className="navbar">
      <p className="navbar__action">Back</p>
      <div className="navbar__location">
        <p className="navbar__location-title text-xs">ALAMAT PENGANTAR</p>
        <p className="navbar__location-content text-l">{content}</p>
        <p className="navbar__location-arrow">Icon</p>
      </div>
    </nav>

  )
}

export default Navbar