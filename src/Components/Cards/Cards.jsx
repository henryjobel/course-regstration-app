import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {
    const [cards,setCards] = useState([])

    useEffect( () => {
        fetch('carddtls.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="https://i.ibb.co/GRmLSNf/Rectangle-2.png" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Introduction to C Programming</h2>
         <p>C programming is a foundational language for software development. It provides a structured approach to writing efficient and portable code. Developed in the early 1970s, it remains influential in system programming, embedded systems, and applications. syntax and versatility make it a valuable skill for programmers.</p>
         <div className="flex gap-10 font-bold">
            <h1>$ Price:200</h1>
            <h2>Credit: 1hr</h2>
         </div>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Cards;