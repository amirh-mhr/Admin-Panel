import React from "react";


function personCard ({avatar, name, subititle,   }) {

    return (

        <div className="card">
            <img src={avatar}/>
            <h2>{name}</h2>
            <h3>{subititle}</h3>

        </div>



    );




}


export default personCard;