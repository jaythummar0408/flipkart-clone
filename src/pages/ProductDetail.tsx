import { useParams, Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { Clock, Truck, Star, Shield, Wallet, ChevronDown, ChevronUp, ThumbsUp } from "lucide-react";
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
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 2, seconds: 0 });
  const [highlightsExpanded, setHighlightsExpanded] = useState(true);
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const product = products.find(p => p.id === id);
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const images = product.images || [product.image, product.image, product.image, product.image, product.image];

  // Generate random rating and review count based on product ID
  const generateRating = (productId: string) => {
    // Convert alphanumeric ID to a numeric seed
    let seed = 0;
    for (let i = 0; i < productId.length; i++) {
      seed += productId.charCodeAt(i);
    }
    const rating = 4.0 + (seed % 10) / 10; // Generates rating between 4.0 and 4.9
    return Math.min(rating, 4.9);
  };

  const generateReviewCount = (productId: string) => {
    // Convert alphanumeric ID to a numeric seed
    let seed = 0;
    for (let i = 0; i < productId.length; i++) {
      seed += productId.charCodeAt(i);
    }
    const baseCount = 500 + (seed * 3); // Different base for each product
    return baseCount + (seed * 2) % 3000; // Random count between 500-3500
  };

  const overallRating = generateRating(product.id);
  const totalReviews = generateReviewCount(product.id);

  // Generate rating distribution based on overall rating
  const generateRatingDistribution = (total: number, avgRating: number) => {
    const fiveStarPercent = (avgRating - 4) * 100; // 0-90%
    const fourStarPercent = 100 - fiveStarPercent - 20;
    const threeStarPercent = 12;
    const twoStarPercent = 5;
    const oneStarPercent = 3;

    return [
      { stars: 5, count: Math.floor(total * fiveStarPercent / 100), percentage: fiveStarPercent },
      { stars: 4, count: Math.floor(total * fourStarPercent / 100), percentage: fourStarPercent },
      { stars: 3, count: Math.floor(total * threeStarPercent / 100), percentage: threeStarPercent },
      { stars: 2, count: Math.floor(total * twoStarPercent / 100), percentage: twoStarPercent },
      { stars: 1, count: Math.floor(total * oneStarPercent / 100), percentage: oneStarPercent },
    ];
  };

  const ratingDistribution = generateRatingDistribution(totalReviews, overallRating);

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
        } else {
          // Timer reached 0, add 45 seconds
          return { hours: 0, minutes: 0, seconds: 45 };
        }
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
              <img src="/fassure.jpg" alt="Flipkart Assured" className="h-5 w-auto" />
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

          {/* Delivery & Services */}
          <div className="bg-white p-4 border-b border-gray-200">
            <div className="space-y-3">
              {/* Express Delivery */}
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-gray-700 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">EXPRESS Delivery in 2 days</p>
                </div>
              </div>

              {/* Seller Info */}
              <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                  <div className="h-4 w-4 bg-gray-200 rounded"></div>
                </div>
                <div>
                  <p className="text-sm text-gray-900">Fulfilled by HSAtlastradeFashion</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex items-center bg-green-600 text-white px-1.5 py-0.5 rounded text-xs">
                      <span className="font-semibold">4.2</span>
                      <Star className="h-2.5 w-2.5 ml-0.5 fill-white" />
                    </div>
                    <span className="text-xs text-gray-600">• 3 years with Flipkart</span>
                  </div>
                </div>
              </div>

              {/* Service Icons */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-1">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium text-gray-700">7-Day</p>
                  <p className="text-xs text-gray-500">Return</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center mb-1">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-700">100% Secure</p>
                  <p className="text-xs text-gray-500">Payment</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 rounded-full bg-purple-50 flex items-center justify-center mb-1">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-700">Flipkart</p>
                  <p className="text-xs text-gray-500">Assured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Highlights */}
          <div className="bg-white border-b border-gray-200">
            <button
              onClick={() => setHighlightsExpanded(!highlightsExpanded)}
              className="w-full p-4 flex items-center justify-between"
            >
              <h3 className="text-base font-semibold text-gray-900">Product highlights</h3>
              {highlightsExpanded ? (
                <ChevronUp className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              )}
            </button>
            {highlightsExpanded && (
              <div className="px-4 pb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Color</p>
                    <p className="text-sm font-medium text-gray-900">Multi</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Fabric</p>
                    <p className="text-sm font-medium text-gray-900">Cotton Blend</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Pattern</p>
                    <p className="text-sm font-medium text-gray-900">Solid</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Sleeve</p>
                    <p className="text-sm font-medium text-gray-900">Full Sleeve</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* All Details */}
          <div className="bg-white border-b border-gray-200">
            <button
              onClick={() => setDetailsExpanded(!detailsExpanded)}
              className="w-full p-4 flex items-center justify-between"
            >
              <h3 className="text-base font-semibold text-gray-900">All details</h3>
              {detailsExpanded ? (
                <ChevronUp className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              )}
            </button>
            {detailsExpanded && (
              <div className="px-4 pb-4">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-900">General</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Brand</p>
                      <p className="text-sm font-medium text-gray-900">FASHION BRAND</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Color</p>
                      <p className="text-sm font-medium text-gray-900">Multi</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Fabric</p>
                      <p className="text-sm font-medium text-gray-900">Cotton Blend</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Pattern</p>
                      <p className="text-sm font-medium text-gray-900">Solid</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Sleeve</p>
                      <p className="text-sm font-medium text-gray-900">Full Sleeve</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Fit</p>
                      <p className="text-sm font-medium text-gray-900">Regular</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Ratings & Reviews */}
          <div className="bg-white p-4 border-b border-gray-200">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Ratings & Reviews</h3>

            {/* Overall Rating */}
            <div className="flex items-start gap-4">
              <div className="text-center">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-3xl font-bold text-gray-900">{overallRating.toFixed(1)}</span>
                  <Star className="h-6 w-6 fill-green-600 text-green-600" />
                </div>
                <p className="text-xs text-gray-500">{totalReviews.toLocaleString()} Ratings</p>
              </div>

              {/* Rating Bars */}
              <div className="flex-1 space-y-1">
                {ratingDistribution.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-2">
                    <span className="text-xs text-gray-600 w-3">{rating.stars}</span>
                    <Star className="h-3 w-3 fill-gray-400 text-gray-400" />
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-600 rounded-full"
                        style={{ width: `${rating.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-12 text-right">{rating.count.toLocaleString()}</span>
                  </div>
                ))}
              </div>
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
