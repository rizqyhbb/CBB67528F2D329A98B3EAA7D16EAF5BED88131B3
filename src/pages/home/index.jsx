import { Card, Navbar, Date, Radio } from "../../components";
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
          <div key={date.id}>
            <Date day={date.hari} date={date.tanggal} disabled={date.hari === "SAB" || date.hari === "MIN"? true : false}/>
          </div>
        ))}
      </div>
      <div className="home__content">
        <div className="home__radio">
            <Radio value="lunch" label="Lunch" name="opsi" checked/>
            <Radio value="dinner" label="Dinner" name="opsi"/>
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
    </div>
  )
}

export default HomePage;