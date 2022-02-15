import { Card } from "../../components";
import api from '../../data.json'
import { useState } from "react";

const HomePage = () => {
  const [data] = useState(api.food)
  
  return (
    <div>
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
      {/* <Card 
        src="https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_02.jpg"
        title="Roasted Chicken with Scrambled Egg" 
        rating="4.5 ****" 
        author="by Kulina - Uptown Lunch" 
        price="Rp 35.000" 
      /> */}
    </div>
  )
}

export default HomePage;