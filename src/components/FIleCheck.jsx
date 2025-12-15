import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";

const MokData = [
  {
    id: 1,
    caseNumber: "04-33-64",
    PatientName: "محمد رضوی",
    DoctorName: "علی تقی زاده",
    hasDefect: true,
    aiAnalysis: [
      { page: "برگه شرح حال", status: "ناقص", reason: "مهر پزشک ندارد" },
      { page: "برگه دستورات", status: "کامل", reason: "-" },
    ],
  },

  {
    id: 2,
    caseNumber: "04-33-65",
    PatientName: "صالح میری",
    DoctorName: "  آرمین سعیدی",
    hasDefect: false,
    aiAnalysis: [
      { page: "برگه دستورات", status: "کامل", reason: "مشکلی یافت نشد" },
    ],
  },

  {
    id: 3,
    caseNumber: "04-33-66",
    PatientName: " جواد یوسفی",
    DoctorName: "   علی تقی زاده",
    hasDefect: false,
    aiAnalysis: [
      { page: "برگه دستورات", status: "کامل", reason: "مشکلی یافت نشد" },
    ],
  },
];

const FileCkeck = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const ToggleRow = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  return (
    <div className="m-2  md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {" "}
      {/*header*/}
      <div className="mb-10 flex items-center gap-4">
        <div className="p-4 bg-indigo-100 rounded-full text-indigo-600 text-2xl">
          <GoFileDirectory />
        </div>
        <div>
          <p className="text-gray-400"> پنل هوشمند</p>
          <p className="text-3xl font-extrabold tracking-tight text-slate-900">
            {" "}
            بررسی خودکار پرونده‌ها با هوش مصنوعی
          </p>
        </div>
      </div>
      <div className="w-full border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex bg-gray-50 p-4 font-bold text-gray-700 border-b">
          <div className="w-1/4">شماره پرونده</div>
          <div className="w-1/4"> نام بیمار</div>
          <div className="w-1/4">پزشک معالج </div>
          <div className="w-1/4"> وضعیت / جزئیات</div>
        </div>
        {MokData.map((item) => (
          <div key={item.id} className="border-b last:border-b-0">
            <div
              className={`flex items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer 
            ${expandedRow === item.id ? "bg-gray-50" : ""}`}
              onClick={() => ToggleRow(item.id)}
            >
              <div className="w-1/4 font-mono text-gray-600">
                {item.caseNumber}
              </div>
              <div className="w-1/4 font-semibold">{item.PatientName}</div>
              <div className="w-1/4 text-gray-500">{item.DoctorName}</div>
              <div className="w-1/4 flex justify-center items-center gap-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    item.hasDefect
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.hasDefect ? "تکمیل" : "دارای نقص"}
                </span>
                <button className="text-xl text-gray-500">
                  {expandedRow === item.id ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </button>
              </div>
            </div>
            {expandedRow === item.id && (

              <div className="bg-indigo-50 p-6 border-t animate-fade-in-down">

              <h4 className="font-bold text-indigo-800 mb-3 text-sm">گزارش هوش مصنوعی:</h4>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">

                  {item.aiAnalysis.map((detail, index) => {
                    <div key={index} className="lex justify-between p-3 border-b last:border-none text-sm">
                      <span className="font-semibold text-gray-700">{detail.page}</span>
                            <span className={detail.status === 'ناقص' ? 'text-red-500' : 'text-green-500'}>
                                {detail.status}
                            </span>
                            <span className="text-gray-500">{detail.reason}</span>
                    </div>
                  })}

                </div>
                
               <div className="mt-4 flex justify-end">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition">
                        مشاهده اسکن مدارک
                    </button>
                </div> 

              </div>
                
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileCkeck;
