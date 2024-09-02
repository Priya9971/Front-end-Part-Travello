import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

import { HotelCard, Navbar ,Categories,SearchStayWithDate,Filter,AuthModal,ProfileDropDown,Alert} from '../../components';


export const Home =() => {

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3500/api/hotels?category=${hotelCategory}`
        );

        setTestData(data);
        setHotels(data ? data.slice(0, 16) : []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);


  return (
    <>
      <Navbar/>
      <main className="main d-flex align-center wrap gap-larger">
        <HotelCard/>
      </main>
      
    </>
  )
}
