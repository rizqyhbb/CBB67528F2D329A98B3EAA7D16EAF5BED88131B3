import { Button } from ".";
import { MdStar, MdStarHalf} from "react-icons/md"

const Card = ({src, title, rating, author, price, onClick}) => {

  let stars = []
  for(let i = 0.5; i <= rating; i++){
    if(rating - i === 0){
      stars.push(<MdStarHalf />)
    } else {
      stars.push(<MdStar />)
    }
  }
  return (
    <div className="card shadow">
      <figure className="card__figure">
        <img className="card__figure-img" src={src} alt="food" />
      </figure>
      <div className="card__content">
        <div className="card__rating-container">
          <p className="card__rating text-s">{rating}</p>
          <p className="card__rating-icon text-s">{stars}</p>
        </div>
      <p className="card__title text-m">{title}</p>
      <p className="card__author text-s">{author}</p>
      </div>
      <div className="card__action">
        <p className="card__price text-m">Rp {price}</p>
        <Button onClick={onClick}>ADD +</Button>
      </div>
    </div>
  )
}

export default Card;