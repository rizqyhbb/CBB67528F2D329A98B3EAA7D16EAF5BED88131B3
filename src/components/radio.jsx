const Radio = ({value, label, name}) => {
  return (
    <div className="radio">
      <label className="radio__label text-l">{label}</label>
      <input className="radio__input" type="radio" name={name} value={value}/>
    </div>
  )
}

export default Radio;