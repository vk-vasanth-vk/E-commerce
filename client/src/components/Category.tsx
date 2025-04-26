import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";

interface CategoryProps {
    category: string;
}

const Category = ({ category }: CategoryProps) => {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate('/electronics');
    };

    return (
        <Card 
            className="hover:shadow-lg transition-shadow duration-300 cursor-pointer" 
            onClick={handleCategoryClick}
        >
            <div className="flex flex-col space-y-2">
                <h3 className="text-base sm:text-lg font-semibold pt-2 px-2">{category}</h3>    
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img 
                        src="https://placeholder.com/400" 
                        alt="Category" 
                        className="border h-full w-full object-cover transition-transform hover:scale-105"
                    />
                </div>
                <div className="px-2 pb-2">
                    <p className="text-xs sm:text-sm text-gray-500">See more</p>
                </div>
            </div>
        </Card>
    )
}

export default Category;