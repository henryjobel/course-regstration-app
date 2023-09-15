import Cart from "../Cart/Cart";

const Carts = ({allSeletedCarts,remaining,credit}) => {
    
    return (
        <div className="card bg-slate-100 shadow-xl">
            <h1 className="font-bold text-sky-500 border-b-8">Credit Hour Remaining {remaining} hr</h1>
            <h1>Carts: {allSeletedCarts.length}</h1>
            {
                allSeletedCarts.map(cart => <Cart
                key={cart.id}
                    cart={cart}
                    ></Cart>)
            }
            <h1>Total Credit hour:{credit}</h1>
        </div>
    );
};
export default Carts;