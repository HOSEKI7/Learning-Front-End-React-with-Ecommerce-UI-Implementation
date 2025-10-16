import { useRouteError } from "react-router";

const NotFoundPage = () => {
  const error = useRouteError();

  return (
    <>
      <div className="flex text-center text-black h-100 justify-center items-center">
        <div>
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-xl font-normal">
            {typeof error === "object" && error && "statusText" in error
              ? (error as { statusText?: string }).statusText
              : "Page Not Found"}
          </p>
          <button className="my-6 px-3 py-2 rounded-xl text-white bg-green-700">
            KEMBALI
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
