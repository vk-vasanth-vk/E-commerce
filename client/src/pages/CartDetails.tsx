import { useState } from "react";
import Cart from "@/components/Cart";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

interface SelectedItem {
    id: string;
    quantity: number;
    price: number;
}

const CartDetails = () => {
    const navigate = useNavigate();
    const { cart, removeFromCart, updateQuantity } = useCart();
    const [selectedItems, setSelectedItems] = useState<Map<string, SelectedItem>>(new Map());

    // Calculate totals
    const selectedCount = selectedItems.size;
    const totalPrice = Array.from(selectedItems.values())
        .reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleCheckout = () => {
        navigate('/checkout', {
            state: { totalAmount: totalPrice }
        });
    };

    const handleItemSelect = (id: string, isSelected: boolean, selectedQuantity: number) => {
        setSelectedItems(prev => {
            const newMap = new Map(prev);
            if (isSelected) {
                const item = cart.find(i => i.id === id);
                if (item) {
                    newMap.set(id, {
                        id,
                        quantity: selectedQuantity,
                        price: item.price
                    });
                }
            } else {
                newMap.delete(id);
            }
            return newMap;
        });
    };

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
                            <span className="font-semibold">{selectedCount} items</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-600">Total:</span>
                            <span className="font-bold">${totalPrice.toFixed(2)}</span>
                        </div>
                        <Button
                            className={`bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors`}
                            onClick={handleCheckout}
                            variant={selectedCount === 0 ? 'outline' : 'default'}
                            disabled={selectedCount === 0}
                        >
                            Proceed to Checkout
                        </Button>
                    </div>
                </div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
                {cart.map((item) => (
                    <Cart
                        key={item.id}
                        {...item}
                        removeFromCart={removeFromCart}
                        updateQuantity={updateQuantity}
                        onSelect={handleItemSelect}
                        isSelected={selectedItems.has(item.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default CartDetails;