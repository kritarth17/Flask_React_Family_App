import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const PeopleList = ({ people }) => {
  return (
    <>
      <div className="max-w-md mx-auto bg-blue-200 shadow-md rounded-lg overflow-hidden">
        <h2 className="text-xl font-semibold text-blue-800 px-6 py-4 bg-blue-400">
          List of People
        </h2>
        <ul>
          {people.map((person) => (
            <li key={person.id} className="border-t border-blue-300">
              <div className="px-6 py-4">
                <p className="text-lg font-semibold text-blue-800">
                  {person.firstName} {person.lastName}
                </p>
                <p className="text-sm text-blue-600">Gender: {person.gender}</p>
                <p className="text-sm text-blue-600">
                  Date of Birth: {person.dateOfBirth}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to={"/add-people"}
          className="text-white bg-green-500 hover:bg-green-600 rounded-md px-6 py-3 shadow-md"
        >
          Add People
        </Link>
      </div>
    </>
  );
};

export default PeopleList;
