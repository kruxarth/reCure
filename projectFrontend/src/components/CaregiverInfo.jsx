// src/components/CaregiverInfoCard.jsx
import React from "react";

const CaregiverInfo = ({ data }) => {
  const caregiver = {
    name: data?.caregiverName || "Anita Deshmukh",
    relation: "Caregiver",
    contact: data?.caregiverMobile || "+91 90123 45678",
    availability: "9:00 AM - 6:00 PM",
    image: "https://via.placeholder.com/80",
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full">
      <div className="flex items-center gap-4">
        <img
          src={caregiver.image}
          alt="Caregiver"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-bold">{caregiver.name}</h2>
          <p className="text-sm text-gray-600">{caregiver.relation}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-700">
        <p><span className="font-medium">Contact:</span> {caregiver.contact}</p>
        <p><span className="font-medium">Available:</span> {caregiver.availability}</p>
      </div>
    </div>
  );
};

export default CaregiverInfo;
