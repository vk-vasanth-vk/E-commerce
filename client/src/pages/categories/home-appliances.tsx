import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";
import List from "@/components/List";
import { getProductsByCategory } from "@/api/product";

const HomeAppliances = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProductsByCategory('Home Appliances');
            const products = response.data;
            setProducts(products);
        };
    
        fetchProducts();
    })

    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Home Appliances</h1>
                <div className="space-y-4">
                    {
                        products.map((product) => (
                            <List key={product.id} title={product.name} description={product.description} price={product.price}  />
                        ))
                    }
                </div>
            </div>
        </SidebarProvider>
    )
}

export default HomeAppliances;