import Cart from "../Cart/Cart";

const Carts = ({allSeletedCarts,remaining,credit}) => {
    
    return (
        <div className="shadow-xl pt-20 m-7 p-14 h-96">
            <h1 className="font-bold text-sky-500 border-b-8 w-80">Credit Hour Remaining {remaining} hr</h1>
            <h1 className="font-bold text-xl pt-5">Course name</h1>
            {
                allSeletedCarts.map(cart => <Cart
                key={cart.id}
                    cart={cart}
                    ></Cart>)
            }
            <h1 className="font-bold text-base text-black pt-10 border-t-8">Total Credit hour:{credit}</h1>
        </div>
    );
};
export default Carts;