import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='border w-full h-16 md:h-20 lg:h-24 bg-white'>
            <div className="w-full h-12 md:h-14 lg:h-16 border px-4 md:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-lg md:text-xl lg:text-2xl font-bold">
                    Logo
                </Link>

                <SearchBox />
                
                {/* Navigation Links - Hidden on mobile */}
                <div className="hidden md:flex space-x-4 lg:space-x-6">
                    <Link to="/account" className="hover:text-gray-600">Account</Link>
                    <Link to="/cart-details" className="hover:text-gray-600">Cart</Link>
                </div>
                
                {/* Mobile Menu Button */}
                <button className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;