import React, { useEffect, useState } from 'react';
import {
  PatientProfile,
  TodaysDiet,
  Quote,
  GamifiedTask,
  Doccard,
  CaregiverInfo,
} from '../components';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("smartcareUser");
    if (stored) {
      setUserData(JSON.parse(stored));
    } else {
      navigate("/"); // redirect to login if no data found
    }
  }, [navigate]);

  if (!userData) return null;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-teal-100 to-blue-50 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome, {userData.name} 👋
        </h1>
        <p className="text-gray-600 text-sm">
          Discharged on {userData.dischargeDate} from {userData.hospitalName}
        </p>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       <PatientProfile data={userData} />
       <TodaysDiet />
        <Quote />
        <GamifiedTask />
      </div>

      {/* Chat Entry */}
      <div className="w-full bg-blue-600 text-center py-3 rounded-xl shadow-md hover:bg-blue-700 transition">
        <Link to="/chat">
          <h2 className="text-xl text-white font-semibold cursor-pointer">
            💬 Chat with SmartCare Bot →
          </h2>
        </Link>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Doccard data={userData} />
       <CaregiverInfo data={userData} />
      </div>
    </div>
  );
};

export default Home;
