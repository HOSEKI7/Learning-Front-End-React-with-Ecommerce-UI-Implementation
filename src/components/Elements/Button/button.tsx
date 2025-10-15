type ButtonProps = {
  children: string;
  classname?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = (props: ButtonProps) => {
  const {
    children,
    classname = "bg-slate-700",
    type = "button",
    onClick = () => {},
  } = props;

  return (
    <button
      className={`px-4 py-2 font-semibold rounded-md ${classname} text-white cursor-pointer`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
