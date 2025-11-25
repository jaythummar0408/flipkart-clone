import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CategoryIcon from "@/components/CategoryIcon";
import ProductCard from "@/components/ProductCard";
import { Clock } from "lucide-react";
import { products } from "@/data/products";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 6, minutes: 35, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="px-3 py-4 space-y-4">
        {/* Category Icons */}
        <div className="flex justify-around items-center bg-card p-3 rounded-lg shadow-sm">
          <CategoryIcon
            imageUrl="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
            label="Top Offers"
          />
          <CategoryIcon
            imageUrl="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100"
            label="Mobiles"
          />
          <CategoryIcon
            imageUrl="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100"
            label="Fashion"
          />
          <CategoryIcon
            imageUrl="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100"
            label="Electronics"
          />
        </div>

        {/* Promotion Banners */}
        <div className="space-y-3">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/960/460/image/604fb3c6709fc1c2.jpeg?q=60"
              alt="Flipkart Banner 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/960/460/image/fe5641546059d994.png?q=60"
              alt="Flipkart Banner 2"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Deals of the Day */}
        <div className="bg-card rounded-lg shadow-md p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-primary text-xl font-bold">Deals of the Day</h2>
              <div className="bg-destructive text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                LIVE
              </div>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-lg">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-base font-mono font-bold text-primary">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            ⚡ Grab the best deals before time runs out!
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
