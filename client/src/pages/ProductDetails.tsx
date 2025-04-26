import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "@/api/product";
import { useCart } from "@/context/CartContext";

const ProductDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { addToCart } = useCart();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await getProductById(id);
            const product = response.data;
            setProduct(product);
        };
    
        fetchProduct();
    })

    const handleAddToCart = () => {
        addToCart({
            id: id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: "https://via.placeholder.com/400", 
            quantity: product.stock
          });
        
        navigate('/cart-details');
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Product Image - 40% */}
                <div className="w-full lg:w-[40%] border">
                    <div className="aspect-square rounded-lg overflow-hidden">
                        <img 
                            src="https://via.placeholder.com/600"
                            alt="Product"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Product Details - 40% */}
                <div className="w-full lg:w-[30%] space-y-4 border">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-gray-600">
                        {product.description}
                    </p>
                    <div className="space-y-2">
                        <h3 className="font-semibold">Features:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                    </div>
                    <p>{product.details}</p>
                </div>

                {/* Price Details - 20% */}
                <div className="border w-full lg:w-[30%] bg-gray-50 p-4 rounded-lg space-y-4 h-fit">
                    <div className="text-3xl font-bold">${product.price}</div>
                    <div className="space-y-2 text-sm text-gray-600">
                        <p>✓ Free Delivery</p>
                        <p>✓ 30-Day Returns</p>
                        <p>✓ 1 Year Warranty</p>
                    </div>
                    <button 
                        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </main>
    )
}

export default ProductDetails;