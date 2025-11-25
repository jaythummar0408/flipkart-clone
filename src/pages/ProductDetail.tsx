import { useParams, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import Header from "@/components/Header";
import { products } from "@/data/products";
import Autoplay from "embla-carousel-autoplay";

const ProductDetail = () => {
  const { id } = useParams();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 5, seconds: 0 });
  const product = products.find(p => p.id === id);
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const images = product.images || [product.image, product.image, product.image, product.image, product.image];

  // Track carousel changes
  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <div className="px-0 py-0">
        <div className="max-w-2xl mx-auto">
          {/* Product Image Carousel */}
          <div className="bg-white">
            <div className="relative">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                setApi={setApi}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {images.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <div className="aspect-square bg-white flex items-center justify-center p-4">
                        <img src={img} alt={`${product.name} ${idx + 1}`} className="max-h-full max-w-full object-contain" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              {/* Carousel Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => api?.scrollTo(idx)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      idx === current ? 'bg-gray-700 w-6' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white p-4 space-y-2 border-b border-gray-200">
            <h1 className="text-base font-normal text-gray-800">{product.name}</h1>
            
            <div className="flex items-center gap-2">
              <div className="bg-secondary px-2 py-1 rounded flex items-center gap-1">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-xs font-bold text-secondary-foreground">F-ASSURED</span>
              </div>
            </div>

            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-green-600 font-bold text-xl">{product.discount}% off</span>
              <span className="text-gray-500 line-through text-base">₹{product.originalPrice}</span>
              <span className="text-2xl font-bold text-gray-900">₹{product.salePrice}</span>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-600" />
                  <p className="text-gray-800 font-semibold text-sm">Offer ends in</p>
                </div>
                <div className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-lg">
                  <span className="text-lg font-mono font-bold">
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
              </div>
              <p className="text-xs text-red-700 font-medium mt-2">⚡ Hurry! Limited time deal</p>
            </div>
          </div>

          {/* Product Images Gallery */}
          {images && images.length > 0 && (
            <div className="bg-white p-4 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Product Images</h3>
              <div className="grid grid-cols-2 gap-3">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full text-base font-bold border-2 border-gray-400 text-gray-800 hover:bg-gray-50 rounded-lg h-12"
              >
                Add to cart
              </Button>
              <Link to="/address" className="w-full">
                <Button
                  size="lg"
                  className="w-full bg-[#EACA43] hover:bg-[#EACA43]/90 text-gray-900 font-bold text-base rounded-lg h-12"
                >
                  Buy at ₹{product.salePrice}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
