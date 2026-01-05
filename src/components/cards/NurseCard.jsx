import React from "react";
import PersonCard from "./PersonCard";




import PersonCard from "./PersonCard";

function NurseCard({ isSupervisor, nursingCode, ...props }) {
  return (
    <PersonCard
      {...props}
      subtitle={isSupervisor ? "سوپروایزر بخش" : "پرستار"}
      licenseLabel="نظام پرستاری"
      licenseCode={nursingCode}
    />
  );
}

export default NurseCard;
