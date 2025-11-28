import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
}

const BASE_PATH = "/best/premium/sale/deal";

const ProductCard = ({ id, name, image, originalPrice, salePrice, discount }: ProductCardProps) => {
  return (
    <Link to={`${BASE_PATH}/product/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-card border-0 shadow-sm">
        <div className="aspect-square bg-white p-3 flex items-center justify-center">
          <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
        </div>
        <div className="p-2.5 space-y-1.5">
          <h3 className="text-xs font-normal line-clamp-2 min-h-[2rem] text-foreground">{name}</h3>
          <div className="flex items-center gap-1">
            <img src="/fassure.jpg" alt="Flipkart Assured" className="h-4 w-auto" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-accent font-semibold text-xs">{discount}% Off</span>
            <span className="text-muted-foreground line-through text-[11px]">₹{originalPrice}</span>
          </div>
          <div className="text-lg font-bold">₹{salePrice}</div>
          <div className="text-[11px] text-accent font-normal">Free Delivery in Two Days</div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
