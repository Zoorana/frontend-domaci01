import React from "react";
import Image from "../image/Image";
import "../idCard/IdCard.css";

const Movie = ({movie_name, year, genre, director, actors, src}) => {
    return <div className="container">
        <div>Naziv: {movie_name} </div>
        <div>Godina: {year} </div>
        <div>Zanr: {genre} </div>
        <div>Reziser: {director} </div>
        <div>Glumci: {actors} </div>
        <div>Slika: <Image src={src}/> </div> 
    </div>
}

export default Movie;