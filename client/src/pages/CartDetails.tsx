import Cart from "@/components/Cart";

const CardDetails = () => {
    return (
        <div className="p-10">
            {/* Header with Cart Title and Checkout Summary */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Shopping Cart</h1>
                
                {/* Checkout Summary */}
                <div className="bg-white p-4 rounded-lg shadow-md border">
                    <div className="flex items-center gap-6">
                        <div className="flex gap-2">
                            <span className="text-gray-600">Selected Items:</span>
                            <span className="font-semibold">3 items</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-600">Total:</span>
                            <span className="font-bold">$299.97</span>
                        </div>
                        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
                <Cart />
                <Cart />
                <Cart />
            </div>
        </div>
    )
}

export default CardDetails;