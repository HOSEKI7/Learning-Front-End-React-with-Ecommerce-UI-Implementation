import { forwardRef } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type, placeholder, name, required = true } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="text-sm border border-bg-[#fcf3ec] rounded w-full py-2 px-3 text-white placeholder:opacity-50"
      name={name}
      id={name}
      required={required}
      ref={ref}
    />
  );
});

export default Input;
