import React from "react";

const PatientProfile = ({ data }) => {
  const patient = {
    name: data?.name || "Prabhat Jha",
    age: data?.age || 20,
    condition: "Post Hospital Recovery",
    admissionDate: data?.dischargeDate || "June 25, 2025",
    profilePic: "https://via.placeholder.com/80",
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full">
      <div className="flex items-center gap-4">
        <img
          src={patient.profilePic}
          alt="Patient"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-bold">{patient.name}</h2>
          <p className="text-sm text-gray-600">{patient.condition}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-700">
        <p><span className="font-medium">Age:</span> {patient.age}</p>
        <p><span className="font-medium">Recovery Start Date:</span> {patient.admissionDate}</p>
      </div>
    </div>
  );
};

export default PatientProfile;
