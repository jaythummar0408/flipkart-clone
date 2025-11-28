import { Link } from "react-router-dom";
import { ArrowLeft, Clock, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import StepIndicator from "@/components/StepIndicator";
import { products } from "@/data/products";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

const Payment = () => {
  const product = products[0];
  const upiId = "q310819385@ybl";

  // Timer state
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [showQR, setShowQR] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("phonepay"); // Default selected

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(45); // Reset to 45 seconds
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePaytmPayment = () => {
    const amount = product.salePrice;
    const name = "Flipkart";

    // Create UPI payment URL for Paytm
    const upiUrl = `paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

    // Try to open Paytm app
    window.location.href = upiUrl;

    toast.success("Redirecting to Paytm...");
  };

  const handlePhonePePayment = () => {
    const amount = product.salePrice;
    const name = "Flipkart";

    // Create UPI payment URL for PhonePe
    const upiUrl = `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

    // Try to open PhonePe app
    window.location.href = upiUrl;

    toast.success("Redirecting to PhonePe...");
  };

  const handleGooglePayPayment = () => {
    const amount = product.salePrice;
    const name = "Flipkart";

    // Create UPI payment URL for Google Pay
    const upiUrl = `tez://upi/pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

    // Try to open Google Pay app
    window.location.href = upiUrl;

    toast.success("Redirecting to Google Pay...");
  };

  const handlePayNow = () => {
    switch (selectedPayment) {
      case "phonepay":
        handlePhonePePayment();
        break;
      case "googlepay":
        handleGooglePayPayment();
        break;
      case "paytm":
        handlePaytmPayment();
        break;
      case "qrcode":
        toast.info("Please scan the QR code to complete payment");
        break;
      default:
        handlePhonePePayment();
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/order-summary">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-semibold">Payments</h1>
        </div>
      </div>

      <StepIndicator currentStep={3} />

      <div className="container mx-auto px-4 space-y-4 max-w-2xl py-6">
        {/* Transaction Timer */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center justify-center gap-2">
          <Clock className="h-5 w-5 text-red-600" />
          <span className="text-sm font-semibold text-red-600">
            Payment ends in {formatTime(timeLeft)}
          </span>
        </div>

        {/* Payment Options */}
        <div className="space-y-3">
          {/* PhonePe */}
          <button
            onClick={() => setSelectedPayment("phonepay")}
            className={`w-full bg-card rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow border-2 ${
              selectedPayment === "phonepay" ? "border-[#5f259f] bg-purple-50" : "border-gray-200"
            } hover:border-[#5f259f] relative`}
          >
            <img src="/phonepay.png" alt="PhonePe" className="h-10 w-auto" />
            <span className="text-lg font-semibold flex-1 text-left">PhonePe</span>
            {selectedPayment === "phonepay" && (
              <div className="w-5 h-5 rounded-full bg-[#5f259f] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            )}
          </button>

          {/* Google Pay */}
          <button
            onClick={() => setSelectedPayment("googlepay")}
            className={`w-full bg-card rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow border-2 ${
              selectedPayment === "googlepay" ? "border-[#4285f4] bg-blue-50" : "border-gray-200"
            } hover:border-[#4285f4] relative`}
          >
            <img src="/gpay.png" alt="Google Pay" className="h-10 w-auto" />
            <span className="text-lg font-semibold flex-1 text-left">Google Pay</span>
            {selectedPayment === "googlepay" && (
              <div className="w-5 h-5 rounded-full bg-[#4285f4] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            )}
          </button>

          {/* Paytm */}
          <button
            onClick={() => setSelectedPayment("paytm")}
            className={`w-full bg-card rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow border-2 ${
              selectedPayment === "paytm" ? "border-[#00baf2] bg-cyan-50" : "border-gray-200"
            } hover:border-[#00baf2] relative`}
          >
            <img src="/paytm.png" alt="Paytm" className="h-10 w-auto" />
            <span className="text-lg font-semibold flex-1 text-left">Paytm</span>
            {selectedPayment === "paytm" && (
              <div className="w-5 h-5 rounded-full bg-[#00baf2] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            )}
          </button>

          {/* Pay with QR Code */}
          <button
            onClick={() => {
              setSelectedPayment("qrcode");
              setShowQR(!showQR);
            }}
            className={`w-full bg-card rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow border-2 ${
              selectedPayment === "qrcode" ? "border-[#2874F0] bg-blue-50" : "border-gray-200"
            } hover:border-[#2874F0] relative`}
          >
            <div className="w-10 h-10 bg-[#2874F0] rounded-full flex items-center justify-center">
              <QrCode className="h-6 w-6 text-white" />
            </div>
            <span className="text-lg font-semibold flex-1 text-left">Pay with QR Code</span>
            {selectedPayment === "qrcode" && (
              <div className="w-5 h-5 rounded-full bg-[#2874F0] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            )}
          </button>

          {/* QR Code Display */}
          {showQR && (
            <div className="bg-white rounded-lg p-6 border-2 border-[#2874F0] flex flex-col items-center gap-4">
              <h3 className="text-lg font-semibold text-gray-900">Scan QR Code to Pay</h3>
              <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                <QRCodeSVG
                  value={`upi://pay?pa=${upiId}&pn=Flipkart&am=${product.salePrice}&cu=INR`}
                  size={200}
                  level="H"
                />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">UPI ID: <span className="font-semibold">{upiId}</span></p>
                <p className="text-sm text-gray-600">Amount: <span className="font-semibold">₹{product.salePrice}</span></p>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Open any UPI app and scan this QR code to complete payment
              </p>
            </div>
          )}
        </div>

        {/* Security Message */}
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <span className="text-green-600">🔒</span>
            <span>100% Secure & Safe Payments</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <div className="container mx-auto max-w-2xl flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</p>
            <p className="text-xl font-bold">₹{product.salePrice}</p>
          </div>
          <Button
            size="lg"
            className="flex-1 max-w-xs bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            onClick={handlePayNow}
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
