// src/components/DocCard.jsx
import React from "react";

const Doccard = ({ data }) => {
  const doctor = {
    name: data?.doctorName || "Dr. Rhea Sharma",
    contact: data?.doctorMobile || "+91 98765 43210",
    specialization: "Assigned Doctor",
    hospital: data?.hospitalName || "GECA Medical Wing",
    image: "https://via.placeholder.com/80",
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full">
      <div className="flex items-center gap-4">
        <img
          src={doctor.image}
          alt="Doctor"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-bold">{doctor.name}</h2>
          <p className="text-sm text-gray-600">{doctor.specialization}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-700">
        <p><span className="font-medium">Hospital:</span> {doctor.hospital}</p>
        <p><span className="font-medium">Contact:</span> {doctor.contact}</p>
      </div>
    </div>
  );
};

export default Doccard;
