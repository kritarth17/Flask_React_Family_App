import PeopleListing from "./PeopleListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(typeof people)
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const res = await fetch('http://127.0.0.1:5000/people');
        const data = await res.json();
        setPeople(data.people);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPeople();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {people.map((people) => (
              <PeopleListing key={people.id} people={people} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PeopleList;
