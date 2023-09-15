import Cart from "../Cart/Cart";

const Carts = ({allSeletedCarts,remaining,credit}) => {
    
    return (
        <div className="text-center">
            <h1>Credit Hour Remaining {remaining} hr</h1>
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