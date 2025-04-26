import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { PlusCircle } from "lucide-react"

interface Address {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface Payment {
    cardNumber: string;
    expiry: string;
    cvv: string;
}

const Checkout = () => {
    const [address, setAddress] = useState<Address | null>(null);
    const [payment, setPayment] = useState<Payment | null>(null);
    const [modalType, setModalType] = useState<'address' | 'payment'>('address');

    const handleAddressSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add form handling logic here
        setAddress({
            firstName: "John",
            lastName: "Doe",
            street: "123 Main St",
            city: "City",
            state: "State",
            zip: "12345"
        });
    };

    const handlePaymentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add form handling logic here
        setPayment({
            cardNumber: "**** **** **** 1234",
            expiry: "12/24",
            cvv: "***"
        });
    };

    return (
        <div className="container mx-auto p-6 md:p-10">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Shipping Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Shipping Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {address ? (
                                <div className="space-y-2">
                                    <p><span className="font-semibold">Name:</span> {address.firstName} {address.lastName}</p>
                                    <p><span className="font-semibold">Address:</span> {address.street}</p>
                                    <p><span className="font-semibold">Location:</span> {address.city}, {address.state} {address.zip}</p>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" onClick={() => setModalType('address')}>
                                                Edit Address
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <AddressPaymentForm type="address" onSubmit={handleAddressSubmit} />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            ) : (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className="w-full" onClick={() => setModalType('address')}>
                                            <PlusCircle className="mr-2 h-4 w-4" />
                                            Add Address
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <AddressPaymentForm type="address" onSubmit={handleAddressSubmit} />
                                    </DialogContent>
                                </Dialog>
                            )}
                        </CardContent>
                    </Card>

                    {/* Payment Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {payment ? (
                                <div className="space-y-2">
                                    <p><span className="font-semibold">Card Number:</span> {payment.cardNumber}</p>
                                    <p><span className="font-semibold">Expiry:</span> {payment.expiry}</p>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" onClick={() => setModalType('payment')}>
                                                Edit Payment Method
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <AddressPaymentForm type="payment" onSubmit={handlePaymentSubmit} />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            ) : (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className="w-full" onClick={() => setModalType('payment')}>
                                            <PlusCircle className="mr-2 h-4 w-4" />
                                            Add Payment Method
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <AddressPaymentForm type="payment" onSubmit={handlePaymentSubmit} />
                                    </DialogContent>
                                </Dialog>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span>$299.97</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span>$9.99</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tax</span>
                                    <span>$29.99</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>$339.95</span>
                                </div>
                            </div>
                            <Button 
                                className="w-full" 
                                size="lg"
                                disabled={!address || !payment}
                            >
                                Place Order
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

// Reusable form component for both address and payment
const AddressPaymentForm = ({ 
    type, 
    onSubmit 
}: { 
    type: 'address' | 'payment', 
    onSubmit: (e: React.FormEvent) => void 
}) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <DialogHeader>
                <DialogTitle>
                    {type === 'address' ? 'Add Shipping Address' : 'Add Payment Method'}
                </DialogTitle>
            </DialogHeader>
            
            {type === 'address' ? (
                <>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" placeholder="123 Main St" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="City" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Input id="state" placeholder="State" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input id="zip" placeholder="12345" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="**** **** **** ****" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" type="password" />
                        </div>
                    </div>
                </>
            )}
            
            <Button type="submit" className="w-full">
                {type === 'address' ? 'Save Address' : 'Save Payment Method'}
            </Button>
        </form>
    );
};

export default Checkout;