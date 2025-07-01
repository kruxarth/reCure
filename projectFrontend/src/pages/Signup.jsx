import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    dischargeDate: "",
    recoveryDays: "",
    caregiverName: "",
    caregiverMobile: "",
    doctorName: "",
    doctorMobile: "",
    hospitalName: "",
    password: "",
    reportFile: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in form) {
      if (
        form[key] === "" ||
        form[key] === null ||
        (key === "reportFile" && !(form.reportFile instanceof File))
      ) {
        alert(`Please fill in the "${key}" field.`);
        return;
      }
    }

  
    const users = JSON.parse(localStorage.getItem("smartcareUsers")) || [];
    users.push(form);
    localStorage.setItem("smartcareUsers", JSON.stringify(users));

    
    localStorage.setItem("smartcareUser", JSON.stringify(form));

    alert("Signup successful!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          SmartCare Signup
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Patient Name" className="p-2 border rounded-md" required />
          <input name="age" value={form.age} onChange={handleChange} placeholder="Age" type="number" className="p-2 border rounded-md" required />
          <input name="dischargeDate" value={form.dischargeDate} onChange={handleChange} placeholder="Discharge Date" type="date" className="p-2 border rounded-md" required />
          <input name="recoveryDays" value={form.recoveryDays} onChange={handleChange} placeholder="Recovery Days" type="number" className="p-2 border rounded-md" required />
          <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" className="p-2 border rounded-md" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input name="caregiverName" value={form.caregiverName} onChange={handleChange} placeholder="Caregiver Name" className="p-2 border rounded-md" required />
          <input name="caregiverMobile" value={form.caregiverMobile} onChange={handleChange} placeholder="Caregiver Mobile" type="tel" className="p-2 border rounded-md" required />
          <input name="doctorName" value={form.doctorName} onChange={handleChange} placeholder="Doctor Name" className="p-2 border rounded-md" required />
          <input name="doctorMobile" value={form.doctorMobile} onChange={handleChange} placeholder="Doctor Mobile" type="tel" className="p-2 border rounded-md" required />
        </div>

        <div className="mb-4">
          <input name="hospitalName" value={form.hospitalName} onChange={handleChange} placeholder="Hospital Name" className="w-full p-2 border rounded-md" required />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700">Upload Health Report</label>
          <input
            type="file"
            name="reportFile"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleChange}
            className="w-full mt-1 text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
