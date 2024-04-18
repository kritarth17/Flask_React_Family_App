import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddPeoplePage = ({ addPeopleSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();

    const newPerson = {
      firstName,
      lastName,
      gender,
      dateOfBirth,
    };
    addPeopleSubmit(newPerson);
    toast.success("Job Added Succesfully");
    return navigate("/");
  };

  return (
    <>
      <form
        onSubmit={submitForm}
        className="max-w-md mx-auto bg-blue-200 shadow-md rounded-lg overflow-hidden p-4"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-blue-800 font-semibold mb-2"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-3 py-2 border border-blue-400 rounded-md focus:outline-none focus:border-blue-500"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-blue-800 font-semibold mb-2"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-3 py-2 border border-blue-400 rounded-md focus:outline-none focus:border-blue-500"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-blue-800 font-semibold mb-2"
          >
            Gender:
          </label>
          <input
            type="text"
            id="gender"
            className="w-full px-3 py-2 border border-blue-400 rounded-md focus:outline-none focus:border-blue-500"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dateOfBirth"
            className="block text-blue-800 font-semibold mb-2"
          >
            Date of Birth:
          </label>
          <input
            type="text"
            id="dateOfBirth"
            className="w-full px-3 py-2 border border-blue-400 rounded-md focus:outline-none focus:border-blue-500"
            required
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-green-500 hover:bg-green-600 rounded-md px-6 py-3 shadow-md"
        >
          Add Person
        </button>
      </form>
    </>
  );
};

export default AddPeoplePage;
