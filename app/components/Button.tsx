'use client';   //don't import server components into client components
import { IconType } from "react-icons";

interface ButtonProps {
    label:string;
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;  //this accepts event of type React.MouseEvent which will accept htmlbuttonelement and will return void 
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon   //aliasing icon here
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
                ${outline? 'bg-white':'bg-rose-500'}  
                ${outline? 'border-black':'border-rose-500'}
                ${outline? 'text-black':'text-white'}
                ${small? 'py-1':'py-3'}
                ${small? 'text-sm':'text-md'}
                ${small? 'font-light':'font-semibold'}
                ${small? 'border-[1px]':'border-2'}`}> {/*if we select an outline prop then value according to this condition */}
        {Icon && (
        <Icon size={24} className="absolute left-4 top-3"/>
        )}
        {label}
    </button>
  )
}

export default Button;