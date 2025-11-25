import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CategoryIcon from "@/components/CategoryIcon";
import ProductCard from "@/components/ProductCard";
import { Percent, Smartphone, ShoppingBag, Monitor, Clock } from "lucide-react";
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
          <CategoryIcon icon={Percent} label="Top Offers" color="bg-gradient-to-br from-yellow-400 to-orange-500" />
          <CategoryIcon icon={Smartphone} label="Mobiles" color="bg-gradient-to-br from-pink-500 to-purple-600" />
          <CategoryIcon icon={ShoppingBag} label="Fashion" color="bg-gradient-to-br from-green-400 to-teal-500" />
          <CategoryIcon icon={Monitor} label="Electronics" color="bg-gradient-to-br from-blue-500 to-indigo-600" />
        </div>

        {/* Big Promotion Banner */}
        <div className="relative bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 rounded-lg overflow-hidden shadow-md">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="relative py-4 px-3 md:py-8 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-4xl md:text-5xl animate-bounce hidden md:block">🎉</div>
            <div className="flex-1 text-center">
              <div className="inline-flex items-center gap-1.5 bg-yellow-300 px-3 md:px-6 py-1.5 md:py-3 rounded-t-2xl">
                <span className="text-lg md:text-2xl font-bold">BIG</span>
                <div className="flex flex-col">
                  <span className="text-sm md:text-lg font-bold text-blue-600">SAVING</span>
                  <span className="text-sm md:text-lg font-bold text-blue-600">DAYS</span>
                </div>
                <span className="text-xl md:text-3xl">⭐</span>
              </div>
              <div className="bg-primary text-primary-foreground px-4 md:px-8 py-2 md:py-4 text-xl md:text-3xl font-bold inline-block rounded-b-2xl">
                80% OFF
              </div>
              <div className="mt-2 space-y-1">
                <div className="text-[10px] md:text-sm font-semibold bg-white inline-block px-2 md:px-4 py-0.5 md:py-1 rounded-full">
                  🏦 Flipkart Axis Bank Credit Card - 5% Unlimited Cashback*
                </div>
                <div className="text-[10px] md:text-sm font-semibold bg-white inline-block px-2 md:px-4 py-0.5 md:py-1 rounded-full">
                  🛒 Flipkart Pay Later - ₹1000* Instant Credit, ₹1000** Off
                </div>
              </div>
            </div>
            <div className="text-4xl md:text-5xl animate-bounce hidden md:block">🎁</div>
          </div>
          <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-yellow-300 rounded-full -mr-10 md:-mr-16 -mt-10 md:-mt-16 flex items-center justify-center">
            <div className="text-center transform rotate-12">
              <div className="text-[10px] md:text-xs font-bold">80%</div>
              <div className="text-[10px] md:text-xs font-bold">OFF*</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-yellow-300 rounded-full -ml-8 md:-ml-12 -mb-8 md:-mb-12 flex items-center justify-center">
            <div className="text-center transform -rotate-12">
              <div className="text-[9px] md:text-xs font-bold">BUY 1</div>
              <div className="text-[9px] md:text-xs font-bold">GET 1</div>
            </div>
          </div>
        </div>

        {/* Deals of the Day */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-primary text-lg font-bold">Deals of the Day</h2>
            <span className="text-destructive font-bold text-xs">SALE IS LIVE</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-base font-mono">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
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
