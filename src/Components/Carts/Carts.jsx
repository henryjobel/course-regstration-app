import Cart from "../Cart/Cart";

const Carts = ({allSeletedCarts,alreadyExist}) => {
    
    return (
        <div className="text-center">
            <h1>Carts: {allSeletedCarts.length}</h1>
            {
                allSeletedCarts.map(cart => <Cart
                key={cart.id}
                    cart={cart}
                    ></Cart>)
            }
        </div>
    );
};

export default Carts;