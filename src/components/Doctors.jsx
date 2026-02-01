import React from "react";
import DoctorCard from "./cards/DoctorCard";
import { FaUserDoctor } from "react-icons/fa6";


const DoctorsList = [
  {
    id: 1,
    DoctorName: "دکتر رضا علوی",
    Medicalsystemcode: "12456",
    specialty: "متخصص قلب و عروق",
    avatar: "/images/doc1.jpg", 
  },
  {
    id: 2,
    DoctorName: "دکتر مریم حسینی",
    Medicalsystemcode: "98765",
    specialty: "متخصص مغز و اعصاب",
    avatar: "/images/doc1.jpg",
  },
  {
    id: 3,
    DoctorName: "دکتر علی کمالی",
    Medicalsystemcode: "45213",
    specialty: "جراح عمومی",
    avatar: "/images/doc1.jpg",
  },
  {
    id: 4,
    DoctorName: "دکتر سارا نوری",
    Medicalsystemcode: "33211",
    specialty: "متخصص اطفال",
    avatar: "/images/doc1.jpg",
  },
];

const Doctors = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      
   
      <div className="mb-10 flex items-center gap-4">
        <div className="flex items-center justify-between mb-4 gap-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-indigo-600 shadow-sm">
            <FaUserDoctor size={28} />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1 font-medium">پنل هوشمند</p>
            <p className="text-3xl font-extrabold tracking-tight text-slate-900">
               لیست پزشکان
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
            onDetailsClick={() => console.log(`Details clicked for ID: ${doctor.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Doctors;