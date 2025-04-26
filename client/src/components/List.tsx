import { Card, CardContent } from "./ui/card"
import { useNavigate } from "react-router-dom"

const List = () => {
    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate('/product-details');
    };

    return (
        <Card 
            className="w-full hover:shadow-lg transition-shadow duration-300 cursor-pointer" 
            onClick={handleProductClick}
        >
            <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                    {/* Image Container */}
                    <div className="w-full md:w-1/4 h-48 md:h-auto">
                        <img 
                            src="https://via.placeholder.com/400"
                            alt="Product"
                            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                    </div>
                    
                    {/* Content Container */}
                    <div className="p-4 md:p-6 flex flex-col justify-between w-full md:w-3/4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-2">Product Title</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        
                        {/* Price and Action Button */}
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-900">$99.99</span>
                            {/* <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                                Add to Cart
                            </button> */}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default List;