import Order from "@/components/Order";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderData {
  _id: string;
  userName: string;
  address: string;
  phone: string;
  cartItems: OrderItem[];
  totalAmount: number;
  createdAt: string;
}

const Orders = () => {
  const [orders, setOrders] = useState<OrderData[]>([]);
  const { userDetails, token } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch(`http://localhost:5000/api/orders/user/${userDetails.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-10">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Your Orders</h1>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <Order
              key={order._id}
              id={order._id}
              date={new Date(order.createdAt).toLocaleDateString()}
              total={order.totalAmount}
              status={"Order Placed"}  // static for now
              items={order.cartItems}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;
