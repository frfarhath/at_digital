const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-[#F28D35] text-white rounded-[4px] pt-[12px] pb-[12px] pr-[20px] pl-[20px] radius-4 gap-[8px] 
        font-medium text-[14px] leading-[14px] tracking-[-0.02em]
        hover:bg-[#d9772b] transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
