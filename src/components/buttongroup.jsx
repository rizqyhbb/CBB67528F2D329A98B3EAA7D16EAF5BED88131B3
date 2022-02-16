
const ButtonGroup = ({selected, label1, label2, onClick}) => {
  return (
    <>
      <button className={selected === label1 ? "buttonGroup__selected" : "buttonGroup__button"}  onClick={onClick}>
        {label1}
      </button>
      <button className={selected === label2 ? "buttonGroup__selected" : "buttonGroup__button"} onClick={onClick}>
        {label2}
      </button>
    </>
  )
}

export default ButtonGroup;