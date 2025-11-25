import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import StepIndicator from "@/components/StepIndicator";
import { products } from "@/data/products";
import { toast } from "sonner";

const Payment = () => {
  const product = products[0];

  const handlePayment = (method: string) => {
    toast.success(`Payment initiated via ${method}`);
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

      <div className="container mx-auto px-4 space-y-4 max-w-2xl">
        {/* Promo Banner */}
        <div className="relative bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,255,255,0.2)_10px,rgba(0,255,255,0.2)_20px)]"></div>
          <div className="relative py-4 px-6 flex items-center justify-between">
            <div className="text-4xl">🎉</div>
            <div className="flex-1 text-center">
              <p className="text-lg font-bold text-foreground">Get up to 80% Discount on</p>
              <p className="text-xl font-bold text-foreground">All UPI Payments</p>
            </div>
            <div className="text-4xl">🎁</div>
          </div>
          <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-400 rounded-full -mr-8 -mt-8"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-400 rounded-full -ml-8 -mb-8"></div>
        </div>

        {/* Payment Options */}
        <div className="space-y-3">
          <button
            onClick={() => handlePayment("PhonePe")}
            className="w-full bg-card rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <span className="text-lg font-semibold">PhonePe</span>
          </button>

          <button
            onClick={() => handlePayment("Paytm")}
            className="w-full bg-card rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              paytm
            </div>
            <span className="text-lg font-semibold">Paytm</span>
          </button>

          <button
            onClick={() => handlePayment("Google Pay")}
            className="w-full bg-card rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-border">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full"></div>
            </div>
            <span className="text-lg font-semibold">Google Pay</span>
          </button>

          <button
            onClick={() => handlePayment("SCAN PAY")}
            className="w-full bg-card rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl">
              📱
            </div>
            <span className="text-lg font-semibold">SCAN PAY</span>
          </button>
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
            onClick={() => handlePayment("selected method")}
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
