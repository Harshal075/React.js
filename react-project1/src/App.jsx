/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Child } from "./components/Child";
import { Counter } from "./components/counter";
import { EventPropogation } from "./components/EventPropogation";
import Card, { Header , Footer} from "./components/NameCard";
import { NetflixCard } from "./components/NetflixCard";


const App = () =>{

  const[user , setUser] = useState("");

  const getFromChild = (data)=>{
    setUser(data);
  }


  return (
    <>
      <Header/>
      {/* <NetflixCard></NetflixCard> */}
      {/* <EventPropogation></EventPropogation> */}
      <Counter></Counter>
      {/* <h1>Hey {user}</h1>
      <Child runFunc={getFromChild}></Child> */}
      <Footer/>
    </>
  )
};

export default App;