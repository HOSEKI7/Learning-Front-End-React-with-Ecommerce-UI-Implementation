import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input/InputForm";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="Your name here.."
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
        required={false}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirm_password"
        placeholder="*****"
      />
      <Button classname="bg-green-700 w-full mb-2">Register</Button>
    </form>
  );
};

export default FormRegister;
