'use client';
import { motion } from "framer-motion";

type ButtonProps = {
  text: string;
  bgColor: string;
  textColor: string;
  onClick?: () => void;
  border?: boolean; // <-- Add this prop
  borderColor?: string; // <-- Add this prop
};

const Button: React.FC<ButtonProps> = ({
  text,
  bgColor,
  textColor,
  onClick,
  border = false,
  borderColor = "black", // Default border color
 
}) => {
  return (
    <div className="flex justify-center items-center mt-2 ">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`px-4 py-2 rounded-lg font-bold text-md transition duration-200 cursor-pointer` + (border ? ` border-2` : '') + (border ? ` border-[${borderColor}]` : '')}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {text}
      </motion.button>
    </div>
  );
};

export default Button;

