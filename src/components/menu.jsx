const Menu = ({id, name, value, label, checked, onChange}) => {
  return (
    <div className="menu">
      <input className="menu__radio" id={id} type="radio" name={name} value={value} checked={checked} onChange={onChange}/>
      <div className="menu__label-container">
        <label className="menu__label text-l" htmlFor={id}>{label}</label>
      </div>
    </div>
  )
}

export default Menu;