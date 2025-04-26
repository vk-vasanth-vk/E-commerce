import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, ChevronRight } from "lucide-react"

interface OrderItem {
  name: string;
  image: string;
  price: string;
  quantity: number;
}

interface OrderProps {
  id: string;
  date: string;
  total: string;
  status: string;
  items: OrderItem[];
}

const OrderCard = ({ id, date, total, status, items }: OrderProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      {/* Order Header */}
      <CardHeader className="bg-gray-50 flex flex-row items-center justify-between p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <div>
            <p className="text-sm text-gray-500">ORDER PLACED</p>
            <p className="font-medium">{date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">TOTAL</p>
            <p className="font-medium">{total}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">ORDER #</p>
            <p className="font-medium">{id}</p>
          </div>
          <div className="text-right">
            <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
              View order details
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {/* Order Items */}
      <CardContent className="p-4">
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-20 h-20">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-sm font-medium">{item.price}</p>
              </div>
              <div>
                <Button variant="outline" size="sm">
                  Buy again
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Status */}
        <div className="mt-4 flex items-center gap-2 text-green-600">
          <Package className="h-5 w-5" />
          <span>{status}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default OrderCard;