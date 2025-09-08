"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({
    // Shipping Information
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    // Billing Information
    billingDifferent: false,
    billingFirstName: "",
    billingLastName: "",
    billingAddress: "",
    billingApartment: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",
    // Payment Information
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    // Options
    saveInfo: false,
    newsletter: false,
    shippingMethod: "standard"
  });

  const [orderItems] = useState([
    {
      id: 1,
      name: "Lavender Dreams Soap",
      price: 12.99,
      quantity: 2,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62c3c3d2-7175-4adb-b3e0-c4963ad2c529.png"
    },
    {
      id: 2,
      name: "Charcoal Detox Bar",
      price: 14.99,
      quantity: 1,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a943e937-90a9-4176-b4f9-15d523406c0c.png"
    }
  ]);

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = orderData.shippingMethod === "express" ? 12.99 : subtotal >= 50 ? 0 : 8.99;
  const tax = subtotal * 0.0875;
  const total = subtotal + shippingCost + tax;

  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setOrderData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmitOrder = () => {
    // Process order
    console.log("Order submitted:", orderData);
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/cart" className="hover:text-green-600">Cart</Link>
            <span>/</span>
            <span className="text-gray-900">Checkout</span>
          </nav>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    stepNumber <= step
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {stepNumber}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  stepNumber <= step ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {stepNumber === 1 ? 'Shipping' : stepNumber === 2 ? 'Payment' : 'Review'}
                </span>
                {stepNumber < 3 && (
                  <div className={`ml-8 w-16 h-0.5 ${
                    stepNumber < step ? 'bg-green-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={orderData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={orderData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={orderData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      placeholder="123 Main St"
                      value={orderData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                    <Input
                      id="apartment"
                      placeholder="Apt 4B"
                      value={orderData.apartment}
                      onChange={(e) => handleInputChange("apartment", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        value={orderData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Select value={orderData.state} onValueChange={(value) => handleInputChange("state", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {states.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        placeholder="10001"
                        value={orderData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={orderData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>

                  {/* Shipping Method */}
                  <div className="space-y-4">
                    <Label>Shipping Method</Label>
                    <RadioGroup
                      value={orderData.shippingMethod}
                      onValueChange={(value) => handleInputChange("shippingMethod", value)}
                    >
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard">Standard Shipping</Label>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            {subtotal >= 50 ? "FREE" : "$8.99"}
                          </span>
                          <span className="text-gray-600 ml-2">3-5 business days</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express">Express Shipping</Label>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">$12.99</span>
                          <span className="text-gray-600 ml-2">1-2 business days</span>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="saveInfo"
                      checked={orderData.saveInfo}
                      onCheckedChange={(checked) => handleInputChange("saveInfo", !!checked)}
                    />
                    <Label htmlFor="saveInfo" className="text-sm">
                      Save this information for next time
                    </Label>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleNextStep} size="lg" className="bg-green-600 hover:bg-green-700">
                      Continue to Payment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Payment Information */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Payment Method Selection */}
                  <div className="space-y-4">
                    <Label>Payment Method</Label>
                    <RadioGroup
                      value={orderData.paymentMethod}
                      onValueChange={(value) => handleInputChange("paymentMethod", value)}
                    >
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card">Credit/Debit Card</Label>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">V</div>
                          <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center">MC</div>
                          <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center">AE</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>
                        <div className="w-16 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">PayPal</div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Credit Card Form */}
                  {orderData.paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={orderData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="cardName">Name on Card *</Label>
                        <Input
                          id="cardName"
                          placeholder="John Doe"
                          value={orderData.cardName}
                          onChange={(e) => handleInputChange("cardName", e.target.value)}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={orderData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={orderData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Billing Address */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="billingDifferent"
                        checked={orderData.billingDifferent}
                        onCheckedChange={(checked) => handleInputChange("billingDifferent", !!checked)}
                      />
                      <Label htmlFor="billingDifferent" className="text-sm">
                        Billing address is different from shipping address
                      </Label>
                    </div>

                    {orderData.billingDifferent && (
                      <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium">Billing Address</h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="billingFirstName">First Name *</Label>
                            <Input
                              id="billingFirstName"
                              value={orderData.billingFirstName}
                              onChange={(e) => handleInputChange("billingFirstName", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="billingLastName">Last Name *</Label>
                            <Input
                              id="billingLastName"
                              value={orderData.billingLastName}
                              onChange={(e) => handleInputChange("billingLastName", e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="billingAddress">Street Address *</Label>
                          <Input
                            id="billingAddress"
                            value={orderData.billingAddress}
                            onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="billingCity">City *</Label>
                            <Input
                              id="billingCity"
                              value={orderData.billingCity}
                              onChange={(e) => handleInputChange("billingCity", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="billingState">State *</Label>
                            <Select value={orderData.billingState} onValueChange={(value) => handleInputChange("billingState", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                {states.map((state) => (
                                  <SelectItem key={state} value={state}>
                                    {state}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="billingZipCode">ZIP Code *</Label>
                            <Input
                              id="billingZipCode"
                              value={orderData.billingZipCode}
                              onChange={(e) => handleInputChange("billingZipCode", e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between">
                    <Button onClick={handlePreviousStep} variant="outline" size="lg">
                      Back to Shipping
                    </Button>
                    <Button onClick={handleNextStep} size="lg" className="bg-green-600 hover:bg-green-700">
                      Review Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Order Review */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Review Your Order</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Order Items */}
                  <div>
                    <h4 className="font-medium mb-4">Order Items</h4>
                    <div className="space-y-4">
                      {orderItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h5 className="font-medium">{item.name}</h5>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            <p className="text-sm text-gray-600">${item.price} each</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Shipping Address</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{orderData.firstName} {orderData.lastName}</p>
                        <p>{orderData.address}</p>
                        {orderData.apartment && <p>{orderData.apartment}</p>}
                        <p>{orderData.city}, {orderData.state} {orderData.zipCode}</p>
                        {orderData.phone && <p>{orderData.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Shipping Method</h4>
                      <div className="text-sm text-gray-600">
                        <p>
                          {orderData.shippingMethod === "standard" ? "Standard Shipping" : "Express Shipping"}
                        </p>
                        <p>
                          {orderData.shippingMethod === "standard" 
                            ? "3-5 business days" 
                            : "1-2 business days"
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h4 className="font-medium mb-2">Payment Method</h4>
                    <div className="text-sm text-gray-600">
                      {orderData.paymentMethod === "card" ? (
                        <p>Credit/Debit Card ending in ****{orderData.cardNumber.slice(-4)}</p>
                      ) : (
                        <p>PayPal</p>
                      )}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={orderData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", !!checked)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for special offers and updates
                    </Label>
                  </div>

                  <div className="flex justify-between">
                    <Button onClick={handlePreviousStep} variant="outline" size="lg">
                      Back to Payment
                    </Button>
                    <Button onClick={handleSubmitOrder} size="lg" className="bg-green-600 hover:bg-green-700">
                      Place Order - ${total.toFixed(2)}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className={`font-semibold ${shippingCost === 0 ? 'text-green-600' : ''}`}>
                      {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-xl font-bold text-green-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Security Features */}
                <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>SSL encrypted checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>30-day return guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span>Secure payment processing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}