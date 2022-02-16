import { Card, Navbar, Date, Menu, Cart, Modal, Search, List, ButtonGroup } from "../../components";
import api from '../../data.json'
import { useState } from "react";

const HomePage = () => {
  const [data] = useState(api.food)
  const [dates] = useState(api.date)
  const [addresses] = useState(api.address);
  const [show, setShow] = useState(false);
  const [location, setlocation] = useState('Tokopedia Tower')
  const [item, setItem] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [datePick, setDatePick] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const [isLunch, setIsLunch] = useState(true)
  const [isDinner, setIsDinner] = useState(false)
  const [selected, setSelected] = useState("Dinner")

  const openModal = () => {
    setShow(true);
    const body = document.querySelector("body")
    body.style.overflowY = "hidden"
  }

  const closeModal = () => {
    setShow(false)
    const body = document.querySelector("body")
    body.style.overflowY = "auto"
  }

  const addToCart = (price) => {
      setItem(item + 1)
      setTotalPrice(totalPrice + price)
  }

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__navbar">
          <Navbar content={location} onClick={openModal}/>
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
          <ButtonGroup label1="Lunch" label2="Dinner" selected={selected} onClick={() => setSelected(selected === "Lunch" ? "Dinner" : "Lunch")}/>
          {/* <div className="home__menu-lunch">
            <Menu id="lunch" name="menu" value="lunch" label="Lunch" checked={isLunch} onChange={(e) => setIsLunch(e.target.checked)}/>
          </div>
          <div className="home__menu-dinner">
            <Menu id="dinner" name="menu" value="dinner" label="Dinner" checked={isDinner} onChange={(e) => setIsDinner(e.target.checked)}/>
          </div> */}
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
              onClick={() => addToCart(food.price)}
            />
          </ div>
        ))}
        </div>
      </div>
      <div className="home__cart">
          <Cart item={item} totalPrice={totalPrice}/>
      </div>
      {show && 
        <>
          <div className="home__modal"></ div>
          <Modal title="Cek makanan yang tersedia di lokasi kamu" onClick={closeModal}>
            <div className="modal__content">
              <Search placeholder="Search.." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
              <div className="modal__content-list-container">
                {searchTerm.length > 3 ? addresses.filter((address) => {
                  if(searchTerm === "") {
                    return address
                  } else if
                    (address.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return address
                  }
                }).map((address) => (
                  <div className="modal__content-list" key={address.id}>
                    <List name={address.name} address={address.detail} onClick={() => setlocation(address.name)}/>
                  </div>
                )) : addresses.map((address) => (
                  <div className="modal__content-list" key={address.id}>
                    <List name={address.name} address={address.detail} onClick={() => setlocation(address.name)}/>
                  </div>))}
              </div>
            </div>  
          </ Modal>
        </>
      }
      
    </div>
  )
}

export default HomePage;