import React from "react";
import PersonCard from "./PersonCard";

function doctorsCard ({specialty, medicalCode, ...props }) {


    
    return (
        <PersonCard
        {...props}
        subtitle={specialty}
        licenseLabel="نظام پزشکی"
        licenseCode={medicalCode}
        
        />

    );


}

export default doctorsCard;