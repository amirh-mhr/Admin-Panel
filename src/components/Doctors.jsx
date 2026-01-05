import React from "react";



const DoctorsList = [
  {
    id: 1,
    caseNumber: "98-12-54",
    DoctorName: "رضا علوی",
    Medicalsystemcode: "12456",
  },
  
];

const Doctors = () => {
  return (
    <div className="m-2  md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="mb-10">
        
        <p className="text-3xl font-extrabold tracking-tight text-slate-900">
          {" "}
         پزشکان{" "}
        </p>
      </div>
    </div>
  );
};

export default Doctors;
