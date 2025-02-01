interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-sm md:text-base";
  const variants = {
    primary: "bg-[var(--primary-color)] text-white hover:bg-[#8B3742]",
    secondary: "bg-white text-[var(--primary-color)] border-2 border-[var(--primary-color)] hover:bg-gray-50"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 