import { Card, Navbar, Date } from "../../components";
import api from '../../data.json'
import { useState } from "react";

const HomePage = () => {
  const [data] = useState(api.food)
  const [dates] = useState(api.date)
  const [location, setlocation] = useState('Tokopedia Tower')

  return (
    <div className="home">
      <div className="home__navbar">
        <Navbar content={location}/>
      </div>
      <div className="home__date">
        {dates.map((date) => (
          <div>
            <Date day={date.hari} date={date.tanggal}/>
          </div>
        ))}
      </div>
      <div className="hiome__card">
      {data.map((food) => (
        <div key={food.id}>
          <Card 
            src={food.src}
            title={food.title}
            rating={food.rating}
            author={food.author}
            price={food.price}
          />
        </ div>
      ))}
      </div>
    </div>
  )
}

export default HomePage;