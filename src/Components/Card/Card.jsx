
import PropTypes from 'prop-types';


const Card = ({card, handelAddToCard}) => {
    const {title,cover_photo,description,price,reading_time} = card; 
     return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={cover_photo}alt="Shoes" className="rounded-xl" />
        </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className='flex gap-12'>
                   <h1>Price:{price}$</h1>
                   <h1>Credit:{reading_time} hr</h1> 
                </div>
                <div className="card-actions">
                <button onClick={()=>handelAddToCard (card)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};



export default Card;