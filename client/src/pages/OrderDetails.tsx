import Order from "@/components/Order"
import { useEffect, useState } from "react"

interface OrderItem {
  name: string;
  image: string;
  price: string;
  quantity: number;
}

interface Order {
  id: string;
  date: string;
  total: string;
  status: string;
  items: OrderItem[];
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockOrders = [
      {
        id: "ORD-123457",
        date: "February 1, 2024",
        total: "$159.99",
        status: "Processing",
        items: [
          {
            name: "New Product",
            image: "https://via.placeholder.com/150",
            price: "$159.99",
            quantity: 1
          }
        ]
      },
      {
        id: "ORD-123456",
        date: "January 15, 2024",
        total: "$299.97",
        status: "Delivered",
        items: [
          {
            name: "Product Name 1",
            image: "https://via.placeholder.com/150",
            price: "$99.99",
            quantity: 1
          },
          {
            name: "Product Name 2",
            image: "https://via.placeholder.com/150",
            price: "$199.98",
            quantity: 2
          }
        ]
      }
    ];

    setOrders(mockOrders);
  }, []);

  return (
    <div className="container mx-auto p-10">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Your Orders</h1>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order) => (
          <Order key={order.id} {...order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;