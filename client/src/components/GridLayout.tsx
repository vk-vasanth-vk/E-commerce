import Category from "./Category";

interface GridLayoutProps {
    className?: string;
}

const catogories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Beauty & Personal Care',
    'Toys & Games',
    'Sports & Outdoors',
    'Automotive',
    'Health & Wellness',
]

const GridLayout = ({className}: GridLayoutProps) => {
    return (
        <div className={`px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
            {/* Example Category cards */}
            {catogories.map((category, index) => (
                <Category key={index} category={category} />
            ))}
        </div>
    )
}

export default GridLayout