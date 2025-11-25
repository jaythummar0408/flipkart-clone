import { LucideIcon } from "lucide-react";

interface CategoryIconProps {
  icon: LucideIcon;
  label: string;
  color: string;
}

const CategoryIcon = ({ icon: Icon, label, color }: CategoryIconProps) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <div className={`${color} rounded-full p-4 w-16 h-16 flex items-center justify-center`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <span className="text-xs font-medium text-center">{label}</span>
    </div>
  );
};

export default CategoryIcon;
