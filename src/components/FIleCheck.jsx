import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { GoFileDirectory } from 'react-icons/go';
import { HiOutlineDocumentSearch } from "react-icons/hi";


const mockData = [
  {
    id: 1,
    caseNumber: '98-12-54',
    patientName: 'رضا علوی',
    doctorName: 'دکتر شمس',
    hasDefect: true, 
    
    aiReport: [
      { page: 'برگه شرح حال', status: 'ناقص', reason: 'مهر و امضای پزشک ندارد' },
      { page: 'دستورات پزشک', status: 'کامل', reason: '-' },
      { page: 'گزارش پرستاری', status: 'ناقص', reason: 'ساعت ثبت دارو درج نشده' },
    ]
  },
  {
    id: 2,
    caseNumber: '98-12-55',
    patientName: 'مریم حسینی',
    doctorName: 'دکتر مرادی',
    hasDefect: false,
    aiReport: [
      { page: 'برگه شرح حال', status: 'کامل', reason: '-' },
      { page: 'دستورات پزشک', status: 'کامل', reason: '-' },
      { page: 'گزارش پرستاری', status: 'کامل', reason: '-' },
    ]
  },
];

const FileCheck = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* هدر */}
      <div className="mb-10 flex items-center gap-4">
        <div className="p-4 bg-indigo-100 rounded-full text-indigo-600 text-2xl">
            <GoFileDirectory />
        </div>
        <div>
            <p className="text-gray-400">پنل هوشمند</p>
            <p className="text-3xl font-extrabold tracking-tight text-slate-900">
            بررسی نواقص پرونده‌ها
            </p>
        </div>
      </div>

     
      <div className="w-full border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        
        
        <div className="flex bg-gray-100 p-4 font-bold text-gray-700 border-b">
          <div className="w-1/4">شماره پرونده</div>
          <div className="w-1/4">نام بیمار</div>
          <div className="w-1/4">پزشک معالج</div>
          <div className="w-1/4 text-center">وضعیت / جزئیات</div>
        </div>

       
        {mockData.map((item) => (
          <div key={item.id} className="border-b last:border-b-0">
            
            
            <div 
                className={`flex items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer ${expandedRow === item.id ? 'bg-indigo-50' : ''}`}
                onClick={() => toggleRow(item.id)}
            >
              <div className="w-1/4 font-mono text-gray-600 font-bold">{item.caseNumber}</div>
              <div className="w-1/4 font-semibold">{item.patientName}</div>
              <div className="w-1/4 text-gray-500">{item.doctorName}</div>
              
              <div className="w-1/4 flex justify-center items-center gap-2">
                <span className={`px-3 py-1 text-xs rounded-full font-bold ${item.hasDefect ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {item.hasDefect ? 'دارای نقص' : 'تکمیل'}
                </span>
                <button className="text-xl text-gray-500">
                  {expandedRow === item.id ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                </button>
              </div>
            </div>

         
            {expandedRow === item.id && (
              <div className="bg-gray-50 p-6 border-t animate-fade-in-down cursor-default">
                
                <div className="flex items-center gap-2 mb-4 text-indigo-700">
                    <HiOutlineDocumentSearch className="text-2xl"/>
                    <h4 className="font-bold">ریز گزارش هوش مصنوعی:</h4>
                </div>
                
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                    
                    
                    <div className="flex bg-indigo-600 text-white text-sm py-3 px-4">
                        <div className="w-1/3 font-bold">نام برگه پرونده</div>
                        <div className="w-1/3 font-bold text-center">وضعیت</div>
                        <div className="w-1/3 font-bold">علت نقص </div>
                    </div>

                    
                    {item.aiReport.map((report, idx) => (
                        <div key={idx} className="flex items-center py-3 px-4 border-b last:border-none hover:bg-gray-50 text-sm">
                            
                           
                            <div className="w-1/3 font-medium text-gray-800">
                                {report.page}
                            </div>

                           
                            <div className="w-1/3 text-center">
                                <span className={`px-2 py-1 rounded-md text-xs ${report.status === 'ناقص' ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-green-50 text-green-600 border border-green-200'}`}>
                                    {report.status}
                                </span>
                            </div>

                            
                            <div className="w-1/3 text-gray-500 text-xs">
                                {report.reason}
                            </div>

                        </div>
                    ))}
                </div>
               

              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default FileCheck;