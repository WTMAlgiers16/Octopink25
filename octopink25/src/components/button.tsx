'use client';
import { motion } from "framer-motion";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  border?: boolean; // <-- Add this prop
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  border = false,
  className = "",

}) => {
  return (
    <div className="flex justify-center items-center mt-2 ">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`px-4 py-2 rounded-lg font-normal text-lg transition duration-200 cursor-pointer ${border ? "border" : ""} ${className} `  }
        
      >
        {text}
      </motion.button>
    </div>
  );
};

export default Button;

