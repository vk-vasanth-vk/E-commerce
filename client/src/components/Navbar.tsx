import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
    const { isAuthenticated, setToken } = useAuth();

    const handleLogout = () => {
        setToken(null);
    }

    return (
        <nav className='border w-full h-16 md:h-20 lg:h-24 bg-white'>
            <div className="w-full h-12 md:h-14 lg:h-16 border px-4 md:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-lg md:text-xl lg:text-2xl font-bold">
                    Logo
                </Link>

                <SearchBox />

                {/* Navigation Links - Hidden on mobile */}
                <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Account</NavigationMenuTrigger>
                                <NavigationMenuContent className="absolute left-0">
                                    <ul className="grid gap-3 p-4 w-[200px]">
                                        {!isAuthenticated && <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                                            <Link to={"/signup"} >Signup</Link>
                                        </li>}
                                        <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                                            Orders
                                        </li>
                                        <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                                            Settings
                                        </li>
                                        {isAuthenticated && <li className="cursor-pointer hover:bg-gray-100 p-2 rounded text-red-600" onClick={handleLogout}>
                                            Logout
                                        </li>}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
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