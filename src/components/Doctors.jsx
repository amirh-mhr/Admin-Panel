import React from "react";
import DoctorCard from "./cards/DoctorCard";
import { FaUserDoctor } from "react-icons/fa6";

const DoctorsList = [
  {
    
    DoctorName: "رضا علوی",
    Medicalsystemcode: "12456",
    specialty: "متخصص قلب و عروق",
    avatar: "./images/doc1.jpg",
  },
  {
    
    DoctorName: "رضا علوی",
    Medicalsystemcode: "12456",
    specialty: "متخصص قلب و عروق",
    avatar: "./images/doctors1.jpg",
  },
  {
   
    DoctorName: "رضا علوی",
    Medicalsystemcode: "12456",
    specialty: "متخصص قلب و عروق",
    avatar: "/images/doctors1.jpg",
  },
  {
    
    DoctorName: "رضا علوی",
    Medicalsystemcode: "12456",
    specialty: "متخصص قلب و عروق",
    avatar: "/images/doctors1.jpg",
  },
];

const Doctors = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="mb-10 flex items-center gap-4">
        <div className="flex items-center justify-between mb-4 gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-indigo-600">
            <FaUserDoctor size={22} />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">پنل هوشمند</p>

            <p className="text-4xl font-extrabold tracking-tight text-slate-900">     
               پزشکان                
            </p>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {DoctorsList.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.DoctorName}
            medicalCode={doctor.Medicalsystemcode}
            specialty={doctor.specialty}
            avatar={doctor.avatar}
            onDetailsClick={() => console.log(doctor.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
