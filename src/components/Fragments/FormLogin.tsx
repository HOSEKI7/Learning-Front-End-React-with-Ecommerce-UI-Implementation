import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input/InputForm";

const FormLogin = () => {
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // mencegah reload
    const form = event.target as HTMLFormElement; // casting event.target sebagai HTMLFormElement

    localStorage.setItem("email", form.email.value); // variabel email diambil dari name, menyimpan di local storage (console)
    localStorage.setItem("password", form.password.value); // menyimpan di local storage (console)
    console.log("login");
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
      />
      <Button
        type="submit"
        classname="bg-green-700 w-full"
        // onClick={handleLogin}
      >
        LOGIN
      </Button>
    </form>
  );
};

export default FormLogin;
