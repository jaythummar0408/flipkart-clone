import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import StepIndicator from "@/components/StepIndicator";
import { products } from "@/data/products";
import { toast } from "sonner";

const Payment = () => {
  const product = products[0];
  const upiId = "jppatel10125-2@okicici";

  const handlePaytmPayment = () => {
    const amount = product.salePrice;
    const name = "Flipkart";

    // Create UPI payment URL for Paytm
    const upiUrl = `paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

    // Try to open Paytm app
    window.location.href = upiUrl;

    toast.success("Redirecting to Paytm...");
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
        {/* Payment Options */}
        <div className="space-y-3">
          <button
            onClick={handlePaytmPayment}
            className="w-full bg-card rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow border-2 border-primary"
          >
            <img src="/paytm.png" alt="Paytm" className="h-10 w-auto" />
            <span className="text-lg font-semibold">Paytm</span>
          </button>
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
            onClick={handlePaytmPayment}
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
