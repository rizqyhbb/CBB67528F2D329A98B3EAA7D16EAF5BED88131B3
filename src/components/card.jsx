import { Button } from ".";

const Card = ({src, title, rating, author, price}) => {
  return (
    <div className="card shadow">
      <figure className="card__figure">
        <img className="card__figure-img" src={src} alt="food" />
      </figure>
      <div className="card__content">
      <p className="card__rating text-s">{rating}</p>
      <p className="card__title text-m">{title}</p>
      <p className="card__author text-s">{author}</p>
      </div>
      <div className="card__action">
        <p className="card__price text-m">{price}</p>
        <Button>ADD +</Button>
      </div>
    </div>
  )
}

export default Card;