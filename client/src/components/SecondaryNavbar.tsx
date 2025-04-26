import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const SecondaryNavbar = () => {
    return (
        <nav className='border w-full h-14 bg-white'>
            <div className="w-full h-full px-4 md:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-lg md:text-xl lg:text-2xl font-bold">
                    Logo
                </Link>

                {/* Home Icon */}
                <Link 
                    to="/cart-details" 
                    className="flex items-center gap-2 hover:text-gray-600 transition-colors"
                >
                    <span className="hidden md:inline">Cart</span>
                </Link>
            </div>
        </nav>
    )
}

export default SecondaryNavbar;