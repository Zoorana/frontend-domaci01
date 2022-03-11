import React from "react";
import Image from "../image/Image";
import "../idCard/IdCard.css";

const Book = ({book_name, year, author, quote, src}) => {
    return <div className="container">

        <div>Naslov: {book_name} </div>
        <div>Godina: {year} </div>
        <div>Autor: {author} </div>
        <div>Slika: <Image src={src} /> </div>
        <div>Citat: {quote} </div>

    </div>
}

export default Book;