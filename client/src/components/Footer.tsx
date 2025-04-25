const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Shop */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Shop</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Featured</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Latest</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <ul className="space-y-2">
                            <li>Email: support@example.com</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Address: 123 E-commerce St</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
                    <p>© {new Date().getFullYear()} Your E-commerce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;