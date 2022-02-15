const Date = ({day, date}) => {
  return (
    <div className="date">
      <button className="date__button">
        <p className="date__button-day text-sm">{day}</p>
        <p className="date__button-date text-m">{date}</p>
      </button>
    </div>
  )
}

export default Date;