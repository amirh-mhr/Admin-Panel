import React from "react";
import NurseCard from "./cards/NurseCard";
import { GiNurseMale } from "react-icons/gi";

const NursesList = [
  {
    
    NurseName: "سما  محمودی",
    Medicalsystemcode: "121456",
    specialty: "سرپرستار ",
    avatar: "./images/doc1.jpg",
  },
  {
    
    NurseName: "سما  محمودی",
    Medicalsystemcode: "121456",
    specialty: "سرپرستار ",
    avatar: "./images/doc1.jpg",
  },
  {
    
    NurseName: "سما  محمودی",
    Medicalsystemcode: "121456",
    specialty: "سرپرستار ",
    avatar: "./images/doc1.jpg",
  },
  {
    
    NurseName: "سما  محمودی",
    Medicalsystemcode: "121456",
    specialty: "سرپرستار ",
    avatar: "./images/doc1.jpg",
  },
  
];

const Nurses = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="mb-10 flex items-center gap-4">
        <div className="flex items-center justify-between mb-4 gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-indigo-600">
            <GiNurseMale size={22} />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">پنل هوشمند</p>

            <p className="text-4xl font-extrabold tracking-tight text-slate-900">     
               پرستاران                
            </p>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {NursesList.map((Nurses) => (
          <NurseCard
            key={Nurses.id}
            name={Nurses.NurseName}
            nursingCode={Nurses.Medicalsystemcode}
            specialty={Nurses.specialty}
            avatar={Nurses.avatar}
            onDetailsClick={() => console.log(Nurses.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Nurses;
