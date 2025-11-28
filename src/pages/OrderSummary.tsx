import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import StepIndicator from "@/components/StepIndicator";
import { products } from "@/data/products";

const BASE_PATH = "/best/premium/sale/deal";

const OrderSummary = () => {
  const product = products[0];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-card border-b border-border sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center gap-3">
          <Link to={`${BASE_PATH}/address`}>
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-base font-semibold">Payments</h1>
        </div>
      </div>

      <StepIndicator currentStep={2} />

      <div className="px-4 space-y-3 max-w-2xl mx-auto">
        {/* Delivery Address */}
        <div className="bg-card rounded-lg p-4 shadow-sm">
          <h2 className="font-bold text-base mb-2">Delivered to:</h2>
          <div className="space-y-0.5 text-foreground">
            <p className="font-semibold text-sm">D</p>
            <p className="text-xs">Ff, Gf, Rajkot 360005</p>
            <p className="text-xs">5</p>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-card rounded-lg p-4 shadow-sm">
          <div className="flex gap-3">
            <div className="w-20 h-20 bg-white rounded flex items-center justify-center p-2">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-sm">{product.name}</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="bg-secondary px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-[10px] font-semibold text-secondary-foreground">Assured</span>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-xs text-muted-foreground">Qty: 1</span>
                <span className="font-semibold text-sm">₹{product.salePrice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Price Details */}
        <div className="bg-card rounded-lg p-4 space-y-3">
          <h2 className="font-bold text-base">Price Details</h2>
          
          <div className="space-y-2 border-t border-border pt-3">
            <div className="flex justify-between text-sm">
              <span>Price (1 item)</span>
              <span>₹{product.originalPrice}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span>Discount</span>
              <span className="text-accent font-semibold">{product.discount}% off</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span>Delivery Charges</span>
              <span className="text-accent font-semibold">FREE Delivery</span>
            </div>
            
            <div className="flex justify-between font-bold text-base border-t border-border pt-3">
              <span>Total Amount</span>
              <span>₹{product.salePrice}</span>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded p-2.5">
            <p className="text-accent font-medium text-xs">You will save {product.discount}% off on this order</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] text-muted-foreground line-through">₹{product.originalPrice}</p>
            <p className="text-lg font-bold">₹{product.salePrice}</p>
          </div>
          <Link to={`${BASE_PATH}/payment`} className="flex-1 max-w-xs">
            <Button size="lg" className="w-full bg-[#ffc800] hover:bg-[#ffc800]/90 text-black font-semibold h-11 text-base">
              Continue
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
