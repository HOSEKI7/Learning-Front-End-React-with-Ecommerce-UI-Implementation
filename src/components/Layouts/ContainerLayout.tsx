import { Outlet } from "react-router";

const ContainerLayout = () => {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
};

export default ContainerLayout;
