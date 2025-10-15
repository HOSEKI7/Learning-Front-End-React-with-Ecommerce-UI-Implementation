import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

type InputFormProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

const InputForm = forwardRef<HTMLInputElement, InputFormProps>((props, ref) => {
  const { label, name, type, placeholder, required } = props;

  return (
    <div className="mb-6">
      <div>
        <Label htmlFor={name}>{label}</Label>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          ref={ref}
        />
      </div>
    </div>
  );
});

export default InputForm;
