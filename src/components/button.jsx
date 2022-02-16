import classNames from "classnames";

const Button = ({children, className, onClick}) => {
  return(
    <button className={classNames('button text-m', className)} type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;