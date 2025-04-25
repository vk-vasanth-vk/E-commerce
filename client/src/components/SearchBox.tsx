import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <div className="flex items-center">
        <Input 
          type="text"
          placeholder="Search products..."
          className="pl-10 pr-4 py-2 w-full h-9 sm:h-10 md:h-11 text-sm sm:text-base 
                     rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500
                     placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-base"
        />
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 
                     h-4 w-4 sm:h-5 sm:w-5 text-gray-400" 
        />
      </div>
    </div>
  )
}

export default SearchBox;