import { icons } from 'lucide-react';
type IconProps = {
    name: string;
    color?: string;
    size?: number|string;
    className?:string;
    onClick?:()=>void;
}
const Icon = ({ name, color, size,className,onClick }:IconProps) => {
const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon color={color} size={size}  className={className} onClick={onClick}/>;
};

export default Icon;