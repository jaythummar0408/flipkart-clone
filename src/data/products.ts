export interface Product {
  id: string;
  name: string;
  image: string;
  images?: string[];
  originalPrice: number;
  salePrice: number;
  discount: number;
  description?: string;
  features?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "boAt Lunar Discovery w/ 1.39",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/7/n/s/-original-imaheh3gzp63zjaf.jpeg?q=70&crop=false",
    images: [
      "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/7/n/s/-original-imaheh3gzp63zjaf.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/x/2/r/-original-imahhuw9fnfghyya.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/g/c/k/-original-imahhuw9kktzfrdm.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/x/y/i/-original-imahhuw92hwsuzhm.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/x/y/i/-original-imahhuw92hwsuzhm.jpeg?q=70&crop=false"
    ],
    originalPrice: 5999,
    salePrice: 99,
    discount: 90,
    description: "Premium smartwatch with advanced features",
    features: [
      "Turn-by-Turn Navigation",
      "Up to 7 Days of Battery Life",
      "DIY Watch Face Studio",
      "Bluetooth Calling",
      "700+ Active Modes",
      "3.5cm HD Display"
    ]
  },
  {
    id: "2",
    name: "Samsung 370 W 3.1 Channel Soundbar",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400",
    originalPrice: 29999,
    salePrice: 99,
    discount: 90,
    description: "Premium soundbar with immersive audio"
  },
  {
    id: "3",
    name: "OnePlus Nord Buds 2",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    originalPrice: 2999,
    salePrice: 99,
    discount: 90,
    description: "True wireless earbuds with ANC"
  },
  {
    id: "4",
    name: "Nothing Ear (2) White Edition",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400",
    originalPrice: 8999,
    salePrice: 99,
    discount: 90,
    description: "Premium TWS with transparent design"
  },
  {
    id: "5",
    name: "JBL Flip 6 Wireless Portable Speaker",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    originalPrice: 9999,
    salePrice: 99,
    discount: 90,
    description: "Waterproof portable Bluetooth speaker"
  },
  {
    id: "6",
    name: "Xiaomi Power Bank 4i 20000mAh",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
    originalPrice: 1499,
    salePrice: 99,
    discount: 90,
    description: "High capacity power bank with fast charging"
  },
  {
    id: "7",
    name: "Noise Airwave Bluetooth Neckband",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
    originalPrice: 1999,
    salePrice: 99,
    discount: 90,
    description: "Wireless neckband with long battery life"
  },
  {
    id: "8",
    name: "Fire Boltt Gladiator Smartwatch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    originalPrice: 4999,
    salePrice: 99,
    discount: 90,
    description: "Rugged smartwatch with fitness tracking"
  }
];
