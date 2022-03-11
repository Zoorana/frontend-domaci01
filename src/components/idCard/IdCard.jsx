import React from "react";
import Image from "../image/Image";
import "./IdCard.css";

const IdCard = ({first_last_name, day_of_birth, city, src}) => {
    return <div className="container">

        <div>Slika: <Image src={src} /> </div>
        <div>Ime i prezime: {first_last_name}</div>
        <div>Datum rodjenja: {day_of_birth} </div>
        <div>Grad: {city} </div>
        
    </div>
}

export default IdCard;


