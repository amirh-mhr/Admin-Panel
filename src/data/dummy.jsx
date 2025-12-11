import React from 'react';

import { FaUserMd, FaUserNurse } from 'react-icons/fa'; 
import { RiFileWarningLine } from 'react-icons/ri'; 
import { AiOutlineDashboard } from 'react-icons/ai'; 

export const links = [
  {
    title: 'مدیریت بیمارستان',
    links: [
      {
        name: 'file-check', // این میره توی آدرس URL
        title: 'رفع نقص پرونده‌ها', // این نمایش داده میشه
        icon: <RiFileWarningLine />,
      },
      {
        name: 'doctors',
        title: 'لیست پزشکان',
        icon: <FaUserMd />,
      },
      {
        name: 'nurses',
        title: 'لیست پرستاران',
        icon: <FaUserNurse />,
      },
    ],
  },
];

