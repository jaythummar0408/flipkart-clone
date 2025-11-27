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
    id: "HD7K2M9P4X",
    name: "Premium Cotton Hoodie - Unisex",
    image: "/hoodie1.jpg",
    images: [
      "/hoodie1.jpg",
      "/hoodie2.jpg",
      "/hoodie3.jpg",
      "/hoodie4.jpg",
      "/hoodie5.jpg"
    ],
    originalPrice: 2499,
    salePrice: 179,
    discount: 93,
    description: "Comfortable premium cotton hoodie with modern design",
    features: [
      "100% Premium Cotton",
      "Soft Fleece Interior",
      "Adjustable Drawstring Hood",
      "Kangaroo Pocket",
      "Ribbed Cuffs and Hem",
      "Machine Washable",
      "Available in Multiple Sizes"
    ]
  },
  {
    id: "PL5N8R3Q6Y",
    name: "Classic Pullover Hoodie - Premium Edition",
    image: "/hoodie2-1.jpg",
    images: [
      "/hoodie2-1.jpg",
      "/hoodie2-2.jpg",
      "/hoodie2-3.jpg",
      "/hoodie2-4.jpg",
      "/hoodie2-5.jpg",
      "/hoodie2-6.jpg"
    ],
    originalPrice: 2999,
    salePrice: 199,
    discount: 93,
    description: "Premium quality pullover hoodie with superior comfort and style",
    features: [
      "Premium Blend Fabric",
      "Ultra Soft Interior Lining",
      "Double-Layered Hood",
      "Front Pouch Pocket",
      "Durable Stitching",
      "Pre-Shrunk Material",
      "Unisex Design",
      "Easy Care - Machine Washable"
    ]
  },
  {
    id: "OS9W4T7B2Z",
    name: "Oversized Hoodie - Street Style",
    image: "/hoodie3-1.jpg",
    images: [
      "/hoodie3-1.jpg",
      "/hoodie3-2.jpg",
      "/hoodie3-3.jpg",
      "/hoodie3-4.jpg"
    ],
    originalPrice: 2799,
    salePrice: 179,
    discount: 94,
    description: "Trendy oversized hoodie perfect for casual streetwear style",
    features: [
      "Oversized Relaxed Fit",
      "Heavy Weight Cotton",
      "Drop Shoulder Design",
      "Spacious Kangaroo Pocket",
      "Thick Drawstrings",
      "Reinforced Seams",
      "Street Style Fashion"
    ]
  },
  {
    id: "AT6F1V8C5L",
    name: "Athletic Performance Hoodie",
    image: "/hoodie4-1.jpg",
    images: [
      "/hoodie4-1.jpg",
      "/hoodie4-2.jpg",
      "/hoodie4-3.jpg",
      "/hoodie4-4.jpg"
    ],
    originalPrice: 3299,
    salePrice: 199,
    discount: 94,
    description: "High-performance athletic hoodie designed for active lifestyle",
    features: [
      "Moisture-Wicking Fabric",
      "Breathable Material",
      "Athletic Fit Design",
      "Zippered Side Pockets",
      "Thumbhole Cuffs",
      "Quick-Dry Technology",
      "Reflective Details",
      "Perfect for Gym & Sports"
    ]
  },
  {
    id: "VG3H9D2S7K",
    name: "Vintage Graphic Hoodie",
    image: "/hoodie5-1.jpg",
    images: [
      "/hoodie5-1.jpg",
      "/hoodie5-2.jpg",
      "/hoodie5-3.jpg",
      "/hoodie5-4.jpg"
    ],
    originalPrice: 2599,
    salePrice: 179,
    discount: 93,
    description: "Stylish vintage-inspired hoodie with unique graphic design",
    features: [
      "Vintage Graphic Print",
      "Soft Cotton Blend",
      "Classic Fit",
      "Front Pocket",
      "Adjustable Hood",
      "Fade-Resistant Print",
      "Retro Style Design",
      "Comfortable All-Day Wear"
    ]
  },
  {
    id: "JK4E8X1M6R",
    name: "Premium Leather Jacket - Classic Biker Style",
    image: "/jacket1-1.jpg",
    images: [
      "/jacket1-1.jpg",
      "/jacket1-2.jpg",
      "/jacket1-3.jpg",
      "/jacket1-4.jpg"
    ],
    originalPrice: 8999,
    salePrice: 199,
    discount: 98,
    description: "Premium quality leather jacket with classic biker design",
    features: [
      "Genuine Leather Material",
      "YKK Zipper Closure",
      "Multiple Pockets",
      "Quilted Shoulder Panels",
      "Inner Lining",
      "Adjustable Waist Tabs",
      "Stand Collar Design",
      "Durable & Long-Lasting",
      "Perfect for All Seasons"
    ]
  }
];
