import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import CategoryIcon from "@/components/CategoryIcon";
import ProductCard from "@/components/ProductCard";
import { Clock } from "lucide-react";
import { products } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 5, seconds: 0 });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const bannerImages = ["/banner1.jpeg", "/banner2.jpeg", "/banner3.jpeg"];

  // Track carousel changes
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Countdown timer
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

      {/* Category Image */}
      <img src="/category.jpeg" alt="Category" className="w-full h-auto object-cover" />

      <div className="px-3 py-4 space-y-4">

        {/* Promotion Banner Carousel */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              setApi={setApi}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{ loop: true }}
            >
              <CarouselContent>
                {bannerImages.map((img, idx) => (
                  <CarouselItem key={idx}>
                    <div className="w-full">
                      <img
                        src={img}
                        alt={`Banner ${idx + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
              {bannerImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => api?.scrollTo(idx)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    idx === current ? 'bg-white w-6' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
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
