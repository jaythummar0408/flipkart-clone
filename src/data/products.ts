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
    salePrice: 199,
    discount: 92,
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
    salePrice: 199,
    discount: 93,
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
    salePrice: 199,
    discount: 92,
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
    id: "ZH2Y5K8N3W",
    name: "Zip-Up Hoodie - Modern Fit",
    image: "/hoodie6-1.jpg",
    images: [
      "/hoodie6-1.jpg",
      "/hoodie6-2.jpg",
      "/hoodie6-3.jpg",
      "/hoodie6-4.jpg"
    ],
    originalPrice: 2899,
    salePrice: 199,
    discount: 93,
    description: "Modern zip-up hoodie with sleek design and premium comfort",
    features: [
      "Full-Length YKK Zipper",
      "Premium Cotton Blend",
      "Side Pockets with Zipper",
      "Slim Fit Design",
      "Soft Fleece Lining",
      "Ribbed Cuffs and Waistband",
      "Breathable Fabric",
      "Easy On/Off Design"
    ]
  },
  {
    id: "CR7M3P9L4T",
    name: "Colorblock Hoodie - Trendy Design",
    image: "/hoodie7-1.jpg",
    images: [
      "/hoodie7-1.jpg",
      "/hoodie7-2.jpg",
      "/hoodie7-3.jpg",
      "/hoodie7-4.jpg"
    ],
    originalPrice: 2699,
    salePrice: 199,
    discount: 93,
    description: "Stylish colorblock hoodie with contemporary design and comfort",
    features: [
      "Colorblock Design",
      "Premium Cotton Fabric",
      "Regular Fit",
      "Kangaroo Front Pocket",
      "Adjustable Drawstring",
      "Soft Inner Fleece",
      "Trendy Color Combination",
      "Perfect for Casual Wear"
    ]
  },
  {
    id: "BN8Q4X6F2D",
    name: "Tech Fleece Hoodie - Premium Quality",
    image: "/hoodie8-1.jpg",
    images: [
      "/hoodie8-1.jpg",
      "/hoodie8-2.jpg",
      "/hoodie8-3.jpg",
      "/hoodie8-4.jpg"
    ],
    originalPrice: 3199,
    salePrice: 199,
    discount: 94,
    description: "Advanced tech fleece hoodie with superior warmth and style",
    features: [
      "Tech Fleece Material",
      "Lightweight & Warm",
      "Ergonomic Design",
      "Zippered Pockets",
      "Tapered Fit",
      "Moisture Management",
      "Premium Finish",
      "All-Season Comfort"
    ]
  },
  {
    id: "WX5T9K2H7P",
    name: "Minimalist Hoodie - Essential Style",
    image: "/hoodie9-1.jpg",
    images: [
      "/hoodie9-1.jpg",
      "/hoodie9-2.jpg",
      "/hoodie9-3.jpg",
      "/hoodie9-4.jpg"
    ],
    originalPrice: 2499,
    salePrice: 199,
    discount: 92,
    description: "Clean minimalist hoodie with timeless design and comfort",
    features: [
      "Minimalist Design",
      "Premium Cotton Blend",
      "Classic Fit",
      "Front Pouch Pocket",
      "Soft Hood Lining",
      "Durable Construction",
      "Versatile Style",
      "Easy Care Fabric"
    ]
  },
  {
    id: "LQ6D8V3N9R",
    name: "Urban Streetwear Hoodie - Bold Design",
    image: "/hoodie10-1.jpg",
    images: [
      "/hoodie10-1.jpg",
      "/hoodie10-2.jpg",
      "/hoodie10-3.jpg",
      "/hoodie10-4.jpg"
    ],
    originalPrice: 2799,
    salePrice: 199,
    discount: 93,
    description: "Bold urban streetwear hoodie with contemporary style",
    features: [
      "Urban Streetwear Design",
      "Heavy Cotton Fabric",
      "Relaxed Fit",
      "Large Front Pocket",
      "Thick Drawcord",
      "Reinforced Stitching",
      "Statement Style",
      "Premium Quality"
    ]
  },
  {
    id: "FM9P2X7K4S",
    name: "Fleece Lined Hoodie - Winter Warmth",
    image: "/hoodie11-1.jpg",
    images: [
      "/hoodie11-1.jpg",
      "/hoodie11-2.jpg",
      "/hoodie11-3.jpg",
      "/hoodie11-4.jpg"
    ],
    originalPrice: 3099,
    salePrice: 199,
    discount: 94,
    description: "Extra warm fleece-lined hoodie perfect for winter comfort",
    features: [
      "Thick Fleece Lining",
      "Winter Warmth",
      "Soft Outer Shell",
      "Deep Pockets",
      "Adjustable Hood",
      "Cozy Comfort",
      "Cold Weather Essential",
      "Machine Washable"
    ]
  },
  {
    id: "YN4B7W9Q5X",
    name: "Cropped Hoodie - Modern Trend",
    image: "/hoodie12-1.jpg",
    images: [
      "/hoodie12-1.jpg",
      "/hoodie12-2.jpg",
      "/hoodie12-3.jpg",
      "/hoodie12-4.jpg"
    ],
    originalPrice: 2599,
    salePrice: 199,
    discount: 92,
    description: "Trendy cropped hoodie with modern fit and style",
    features: [
      "Cropped Length Design",
      "Soft Cotton Blend",
      "Modern Fit",
      "Front Pocket",
      "Drawstring Hood",
      "Ribbed Hem",
      "Fashion Forward",
      "Versatile Styling"
    ]
  },
  {
    id: "GT8R5M3C6K",
    name: "Graphic Print Hoodie - Statement Style",
    image: "/hoodie13-1.jpg",
    images: [
      "/hoodie13-1.jpg",
      "/hoodie13-2.jpg",
      "/hoodie13-3.jpg",
      "/hoodie13-4.jpg"
    ],
    originalPrice: 2899,
    salePrice: 199,
    discount: 93,
    description: "Eye-catching graphic print hoodie with bold statement design",
    features: [
      "Bold Graphic Print",
      "Premium Cotton",
      "Regular Fit",
      "Kangaroo Pocket",
      "Soft Interior",
      "Fade-Resistant Design",
      "Statement Piece",
      "Comfortable Wear"
    ]
  },
  {
    id: "DP3L6Y8N2V",
    name: "Half-Zip Hoodie - Athletic Style",
    image: "/hoodie14-1.jpg",
    images: [
      "/hoodie14-1.jpg",
      "/hoodie14-2.jpg",
      "/hoodie14-3.jpg",
      "/hoodie14-4.jpg"
    ],
    originalPrice: 3199,
    salePrice: 199,
    discount: 94,
    description: "Sporty half-zip hoodie with athletic design and comfort",
    features: [
      "Half-Zip Design",
      "Athletic Fit",
      "Moisture-Wicking",
      "Side Pockets",
      "Breathable Fabric",
      "Stand Collar",
      "Performance Material",
      "Active Lifestyle"
    ]
  },
  {
    id: "HX7Q9W4T2B",
    name: "Sherpa Lined Hoodie - Ultimate Warmth",
    image: "/hoodie15-1.jpg",
    images: [
      "/hoodie15-1.jpg",
      "/hoodie15-2.jpg",
      "/hoodie15-3.jpg",
      "/hoodie15-4.jpg"
    ],
    originalPrice: 3499,
    salePrice: 199,
    discount: 94,
    description: "Ultra-warm sherpa lined hoodie for maximum comfort",
    features: [
      "Sherpa Fleece Lining",
      "Extra Warm",
      "Soft Outer Layer",
      "Front Zip Closure",
      "Side Pockets",
      "Cozy Hood",
      "Winter Essential",
      "Premium Comfort"
    ]
  },
  {
    id: "SK2N8F5V9M",
    name: "Tie-Dye Hoodie - Unique Pattern",
    image: "/hoodie16-1.jpg",
    images: [
      "/hoodie16-1.jpg",
      "/hoodie16-2.jpg",
      "/hoodie16-3.jpg",
      "/hoodie16-4.jpg"
    ],
    originalPrice: 2699,
    salePrice: 199,
    discount: 93,
    description: "Vibrant tie-dye hoodie with unique hand-crafted pattern",
    features: [
      "Unique Tie-Dye Pattern",
      "Premium Cotton",
      "Relaxed Fit",
      "Kangaroo Pocket",
      "Soft Fabric",
      "No Two Alike",
      "Artistic Design",
      "Comfortable Wear"
    ]
  },
  {
    id: "RV6C9L2X8D",
    name: "Reversible Hoodie - Two in One",
    image: "/hoodie17-1.jpg",
    images: [
      "/hoodie17-1.jpg",
      "/hoodie17-2.jpg",
      "/hoodie17-3.jpg",
      "/hoodie17-4.jpg"
    ],
    originalPrice: 3299,
    salePrice: 199,
    discount: 94,
    description: "Innovative reversible hoodie offering two styles in one",
    features: [
      "Reversible Design",
      "Two Styles in One",
      "Premium Fabric",
      "Double-Sided Wear",
      "Front Pocket",
      "Versatile Look",
      "Value for Money",
      "Unique Feature"
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
  },
  {
    id: "BJ9X3K7P2W",
    name: "Bomber Jacket - Vintage Style",
    image: "/jacket2-1.jpg",
    images: [
      "/jacket2-1.jpg",
      "/jacket2-2.jpg",
      "/jacket2-3.jpg",
      "/jacket2-4.jpg"
    ],
    originalPrice: 7999,
    salePrice: 199,
    discount: 98,
    description: "Classic bomber jacket with vintage appeal and modern comfort",
    features: [
      "Bomber Style Design",
      "Premium Fabric",
      "Ribbed Cuffs & Hem",
      "Front Zip Closure",
      "Side Pockets",
      "Lightweight & Warm",
      "Versatile Style",
      "Comfortable Fit"
    ]
  },
  {
    id: "DJ5T8M4N6Q",
    name: "Denim Jacket - Classic Blue",
    image: "/jacket3-1.jpg",
    images: [
      "/jacket3-1.jpg",
      "/jacket3-2.jpg",
      "/jacket3-3.jpg",
      "/jacket3-4.jpg"
    ],
    originalPrice: 6999,
    salePrice: 199,
    discount: 97,
    description: "Timeless denim jacket with classic blue wash and style",
    features: [
      "Premium Denim Fabric",
      "Classic Blue Wash",
      "Button Front Closure",
      "Chest Pockets",
      "Regular Fit",
      "Durable Construction",
      "Timeless Design",
      "Easy to Style"
    ]
  }
];
