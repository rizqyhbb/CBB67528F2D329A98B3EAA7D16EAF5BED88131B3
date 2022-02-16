import { Card, Navbar, Date, Menu, Cart, Modal } from "../../components";
import api from '../../data.json'
import { useState } from "react";

const HomePage = () => {
  const [data] = useState(api.food)
  const [dates] = useState(api.date)
  const [address] = useState(api.address);
  const [show, setShow] = useState(false);
  const [location, setlocation] = useState('Tokopedia Tower')
  const [item, setItem] = useState(0)
  const [totalPrice, setTotalprice] = useState(0)
  const [datePick, setDatePick] = useState({})

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__navbar">
          <Navbar content={location} onClick={() => setShow(true)}/>
        </div>
        <div className="home__date">
          {dates.map((date) => (
            <div key={date.id}>
              <Date id={date.id}  day={date.hari} date={date.tanggal} name="date" value={datePick} onChange={()=> setDatePick({hari: date.hari, tanggal: date.tanggal})} disabled={date.hari === "SAB" || date.hari === "MIN"? true : false}/>
            </div>
          ))}
        </div>
      </div>
      <div className="home__content">
        <div className="home__menu">
            <Menu id="lunch" name="menu" value="lunch" label="Lunch" checked={true} onChange={() => ""}/>
            <Menu id="dinner" name="menu" value="dinner" label="Dinner" onChange={() => ""}/>
        </div>
        <div className="home__card">
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
      <div className="home__cart">
          <Cart item={item} totalPrice={totalPrice}/>
      </div>
      {show && 
        <div className="home__modal">
        <Modal title="Cek makanan yang tersedia di lokasi kamu" onClick={() => setShow(false)}>
          <div>
            <h1>Hello World</h1>
          </div>  
        </ Modal>
      </div>
      }
      
    </div>
  )
}

export default HomePage;