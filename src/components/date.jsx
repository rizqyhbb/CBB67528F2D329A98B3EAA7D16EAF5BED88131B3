const Date = ({day, date, disabled}) => {
  return (
    <div className="date">
      <button className="date__button" disabled={disabled}>
        <p className="date__button-day text-xs">{day}</p>
        <p className="date__button-date text-m">{date}</p>
      </button>
    </div>
  )
}

export default Date;