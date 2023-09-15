

const Cart = ({cart}) => {
    const {title} = cart;
    return (
        <div className=" bg-slate-200 p-4 m-4 rounded-xl">
            <h3>{title}</h3>
        </div>
    );
};

export default Cart;