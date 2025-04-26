import { useState, useEffect } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Checkbox } from "./ui/checkbox"

interface CartProps {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    onSelect: (id: string, isSelected: boolean, selectedQuantity: number) => void;
    isSelected: boolean;
}

const Cart = ({ 
    id, 
    name, 
    description, 
    price, 
    image, 
    quantity, 
    removeFromCart, 
    updateQuantity,
    onSelect,
    isSelected 
}: CartProps) => {
    const [quantityValue, setQuantityValue] = useState(1);

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1) {
            setQuantityValue(newQuantity);
            updateQuantity(id, newQuantity);
            // Update selected items if item is checked
            if (isSelected) {
                onSelect(id, true, newQuantity);
            }
        }
    };

    const handleCheckboxChange = (checked: boolean) => {
        onSelect(id, checked, quantityValue);
    };

    return (
        <Card className="w-full hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
                <div className="flex flex-col md:flex-row relative">
                    {/* Checkbox Container */}
                    <div className="flex items-center px-4 md:px-6 py-4 md:absolute md:h-full md:justify-center">
                        <Checkbox 
                            checked={isSelected}
                            onCheckedChange={handleCheckboxChange}
                        />
                    </div>
                    
                    {/* Price Tag - Absolute Position */}
                    <div className="absolute top-4 right-4 z-10">
                        <span className="text-xl font-bold bg-white/90 px-3 py-1 rounded-lg shadow-sm">
                            ${(quantityValue * price).toFixed(2)}
                        </span>
                    </div>

                    {/* Image Container - Adjusted with left padding for checkbox */}
                    <div className="w-full md:w-1/4 h-48 md:h-auto md:ml-12">
                        <img 
                            src="https://via.placeholder.com/400"
                            alt="Product"
                            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                    </div>
                    
                    {/* Content Container */}
                    <div className="p-4 md:p-6 flex flex-col justify-between w-full md:w-3/4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-2">{name}</h2>
                            <p className="text-gray-600 mb-4">
                                {description}
                            </p>
                        </div>
                        
                        {/* Quantity and Remove Controls */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border rounded-lg">
                                    <Button 
                                        variant="ghost" 
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => handleQuantityChange(quantityValue - 1)}
                                        // disabled={quantityValue <= 1}
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="w-8 text-center">{quantityValue}</span>
                                    <Button 
                                        variant="ghost" 
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => handleQuantityChange(quantityValue + 1)}
                                        // disabled={quantityValue >= quantity}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                                <Button 
                                    variant="destructive" 
                                    size="sm"
                                    className="flex items-center gap-2"
                                    onClick={() => removeFromCart(id)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Cart;