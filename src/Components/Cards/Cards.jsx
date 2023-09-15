/* eslint-disable no-undef */
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({handelAddToCard}) => {
    const [card,setCards] = useState([])

    useEffect( () => {
        fetch('carddtls.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
            <div className="grid grid-cols-3">
            
            {
                card.map(card => <Card 
                    key={card.id} 
                    card={card}
                    handelAddToCard={handelAddToCard}
                ></Card>)
            }
        </div>
        
        
    );
};

export default Cards;