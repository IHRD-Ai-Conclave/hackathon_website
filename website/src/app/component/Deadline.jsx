import React from 'react';

const DeadlineUpdate = ({ deadline = "18-11-2024" }) => {
  return (
    <div className="w-full m-10 max-w-md mx-auto bg-white shadow-md  rounded-lg p-10 border-2 border-blue-500">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black">Deadline Updated</h2>
      </div>
      <div className="mt-4 text-center">
        <p className="text-xl text-gray-700 mb-4">
          The registration deadline has been updated to:
        </p>
        <p className="text-3xl font-bold text-blue-700">{deadline}</p>
      </div>
    </div>
  );
};

export default DeadlineUpdate;
