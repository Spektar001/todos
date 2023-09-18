type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};
export const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button type="button" className={`${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
