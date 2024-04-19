import { FaMapMarker } from "react-icons/fa";
const PeopleListing = ({ people }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{people.firstName}</div>
          <h3 className="text-xl font-bold">{people.lastName}</h3>
        </div>
        <div className="mb-5">Gender: {people.gender}</div>
        <button className="text-indigo-500 mb-5 hover:text-indigo-600">
          Add Children
        </button>
        <h3 className="text-green-700 mb-2">Date of Birth: {people.dateOfBirth}</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            Birth place
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleListing;
