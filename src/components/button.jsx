import classNames from "classnames";

const Button = ({children, className}) => {
  return(
    <button className={classNames('button text-m', className)} type="button" >
      {children}
    </button>
  )
}

export default Button;