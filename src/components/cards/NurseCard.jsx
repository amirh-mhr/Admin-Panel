import React from "react";
import PersonCard from "./PersonCard";






function NurseCard({ specialty, nursingCode, ...props }) {
  return (
    <PersonCard
      {...props}
      subtitle={specialty}
      licenseLabel="نظام پرستاری"
      licenseCode={nursingCode}
    />
  );
}

export default NurseCard;
