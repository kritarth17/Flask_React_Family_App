import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddPeoplePage = ({ addPeopleSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("Female");
  const [dateOfBirth, setDateOfBirth] = useState(null); // Initialize with null

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newPerson = {
      firstName,
      lastName,
      gender,
      dateOfBirth: dateOfBirth ? dateOfBirth.toLocaleDateString() : "", // Convert date to string if selected
    };
    addPeopleSubmit(newPerson);
    toast.success("Member Added Successfully");
    return navigate("/people-list");
  };

  return (
    <section className="bg-cyan-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add a New Member
            </h2>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Your firstname"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Your family name"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-gray-700 font-bold mb-2"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="border rounded w-full py-2 px-3"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="None">Prefer not to say</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="dateOfBirth"
                className="block text-gray-700 font-bold mb-2"
              >
                Date of Birth
              </label>
              <DatePicker
                id="dob"
                selected={dateOfBirth}
                onChange={(date) => setDateOfBirth(date)}
                dateFormat="MM/dd/yyyy" // Date format
                placeholderText="Select Date"
                className="w-full px-3 py-2 border border-blue-400 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-green-500 hover:bg-green-600 rounded-md px-6 py-3 shadow-md"
            >
              Add Member
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPeoplePage;
