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

const ProductCard = ({ id, name, image, originalPrice, salePrice, discount }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-card border-0 shadow-sm">
        <div className="aspect-square bg-white p-3 flex items-center justify-center">
          <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
        </div>
        <div className="p-2.5 space-y-1.5">
          <h3 className="text-xs font-normal line-clamp-2 min-h-[2rem] text-foreground">{name}</h3>
          <div className="flex items-center gap-1">
            <div className="bg-secondary px-1.5 py-0.5 rounded flex items-center gap-0.5">
              <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-[10px] font-semibold text-secondary-foreground">Assured</span>
            </div>
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
