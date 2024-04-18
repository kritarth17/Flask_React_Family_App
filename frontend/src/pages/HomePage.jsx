import Hero from "../components/Hero";
import PeopleList from "../components/PeopleList"
import { useState, useEffect } from "react";

const HomePage = () => {
  const [people, setPeople] = useState([])
  useEffect(()=>{
    const fetchPeople = async () => {

      try{
        const res = await fetch("/api/people")
        const data = await res.json()
        setPeople(data.people)
        console.log(data.people)
      }
      catch(error){
        console.log("Error fetching data", error)
      }

    }
    fetchPeople()
  },[])
  return (
    <>
      <Hero />
      <PeopleList people={people} />
    </>
  );
};

export default HomePage;
