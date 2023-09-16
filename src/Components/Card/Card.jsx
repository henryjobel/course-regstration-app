



const Card = ({card, handelAddToCard}) => {
    const {title,cover_photo,description,price,reading_time} = card; 
     return (
        <div className="card bg-base-100 shadow-xl mt-3 mb-3">
        <figure className="px-10 pt-10">
            <img src={cover_photo}alt="Shoes" className="rounded-xl" />
        </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className='flex justify-around'>
                   <h1 className=" font-medium text-base text-indigo-500">Price:{price} $</h1>
                   <h1 className=" font-medium text-base text-emerald-600">Credit:{reading_time} hour</h1> 
                </div>
                <div className="card-actions">
                <button onClick={()=>handelAddToCard (card)} className="btn btn-primary w-[282px]">Select</button>
                </div>
            </div>
        </div>
    );
};



export default Card;