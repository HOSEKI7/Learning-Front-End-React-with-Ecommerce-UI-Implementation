import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button/button";
import InputForm from "../Elements/Input/InputForm";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // mencegah reload

    // const form = event.target as HTMLFormElement; // casting event.target sebagai HTMLFormElement
    // localStorage.setItem("email", form.email.value); // variabel email diambil dari name, menyimpan di local storage (console)
    // localStorage.setItem("password", form.password.value); // menyimpan di local storage (console)

    console.log("login");

    const form = event.target as HTMLFormElement;
    const data = {
      username: form.username.value,
      password: form.password.value,
    };

    login(data, (status, res: { response?: { data: string } } | string) => {
      if (status) {
        localStorage.setItem("token", res as string);
        window.location.href = "/";
      } else {
        setLoginFailed(
          (typeof res === "object" && res?.response?.data) ||
            "username or password is incorrect."
        );
        console.log("Login Response:", res);
      }
    });
  };

  // useEffect(() => {
  //   if (localStorage.getItem("email") && localStorage.getItem("password")) {
  //     window.location.href = "/";
  //   }
  // });

  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="username"
        name="username"
        placeholder="John Doe"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
      />

      <Button type="submit" classname="bg-green-700 w-full mb-2">
        LOGIN
      </Button>

      {loginFailed && (
        <p className="text-red-500 text-center text-sm p-1">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
