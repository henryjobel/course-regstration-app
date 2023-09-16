

const Cart = ({cart}) => {
    const {title} = cart;
    return (
        <div className=" bg-slate-200 rounded-xl mt-1">
            
            <h3>{title}</h3>
        </div>
    );
};

export default Cart;