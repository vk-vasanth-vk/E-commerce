import Cart from "@/components/Cart";

const CardDetails = () => {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
            <h3 className="text-1xl mb-10">Total carts: 3</h3>
            <div className="space-y-4">
                <Cart />
                <Cart />
                <Cart />
            </div>
        </div>
    )
}

export default CardDetails;