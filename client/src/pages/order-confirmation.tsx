import { Link } from "react-router-dom"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const OrderConfirmation = () => {
    return (
        <div className="mt-20 flex items-center justify-center p-4">
            <Card className="w-full max-w-lg">
                <CardContent className="p-6 text-center space-y-6">
                    {/* Success Icon */}
                    <div className="flex justify-center">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                    </div>

                    {/* Confirmation Message */}
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Order Confirmed!
                        </h1>
                        <p className="text-gray-600">
                            Thank you for your purchase. Your order has been successfully placed.
                        </p>
                    </div>

                    {/* Order Number */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Order Number</p>
                        <p className="text-lg font-semibold">#ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4">
                        <Link to="/orders">
                            <Button variant="default" className="w-full">
                                View Order Details
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button variant="outline" className="w-full">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default OrderConfirmation