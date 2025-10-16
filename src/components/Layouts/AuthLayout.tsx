import type React from "react";
import { Link } from "react-router";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  type: string;
};

const AuthLayout = (props: AuthLayoutProps) => {
  const { children, title, type } = props;

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-[url('https://cdn.wccftech.com/wp-content/uploads/2019/06/AMD-RDNA-Navi-GPU-Architecture_1.jpg')] bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-multiply">
      <div className="w-full max-w-md px-15 py-20">
        <h1 className="text-3xl font-bold mb-2 text-green-700">{title}</h1>
        <p className="font-medium text-neutral-300 mb-6">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm text-neutral-300 p-3 text-center">
          {type === "login"
            ? "Dont't have an account yet? "
            : "Already have an account? "}
          {type === "login" && (
            <Link to="/register" className="text-green-700 font-bold">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-green-700 font-bold">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
