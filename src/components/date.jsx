const Date = ({day, date, name, value, checked, onChange, id, disabled}) => {
  return (
    <div className="date">
      <input className="date__radio"type="radio" id={id} name={name} value={value} checked={checked} onChange={onChange} disabled={disabled} />
      <div className="date__label-container">
        <label className="date__label text-l" htmlFor={id}>
          <p className="date__radio-day text-xs">{day}</p>
          <p className="date__radio-date text-m">{date}</p>
        </label>
      </div>
    </div>
  )
}

export default Date;