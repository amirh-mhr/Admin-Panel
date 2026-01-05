import React from "react";


function personCard ({avatar,
  name,
  subtitle,
  licenseLabel,
  licenseCode,
  onDetailsClick,   }) {

    return (
    <div className="grid grid-cols-3 items-center gap-4 p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
      
      <div className="flex flex-col items-center gap-2">
        <img src={avatar}
         alt={name} className="w-20 h-20 rounded-full object-cover border"/>
        <span className="text-xs text-gray-500">
          {licenseLabel}: {licenseCode}
        </span>
      </div>

      
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>

        <button
         onClick={onDetailsClick} 
         className="w-fit mt-2 px-4 py-1.5 text-sm rounded-lg
          bg-blue-600 text-white hover:bg-blue-700 transition">
           جزئیات               
        </button>
      </div>

      
      <div className="col-extra">
       
      </div>
    </div>
  );
}


export default personCard;