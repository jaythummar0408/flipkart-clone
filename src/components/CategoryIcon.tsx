import { LucideIcon } from "lucide-react";

interface CategoryIconProps {
  icon?: LucideIcon;
  imageUrl?: string;
  label: string;
  color?: string;
}

const CategoryIcon = ({ icon: Icon, imageUrl, label, color }: CategoryIconProps) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <div className={`${imageUrl ? '' : color} ${imageUrl ? 'w-16 h-16' : 'rounded-full p-4 w-16 h-16'} flex items-center justify-center`}>
        {imageUrl ? (
          <img src={imageUrl} alt={label} className="w-full h-full object-contain" />
        ) : Icon ? (
          <Icon className="h-8 w-8 text-white" />
        ) : null}
      </div>
      <span className="text-xs font-medium text-center">{label}</span>
    </div>
  );
};

export default CategoryIcon;
