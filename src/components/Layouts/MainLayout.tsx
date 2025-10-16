import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// import type { ReactNode } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// type MainLayoutProps = {
//   children: ReactNode;
//   classname?: string;
// };

// const MainLayout = (props: MainLayoutProps) => {
//   const { children, classname } = props;

//   return (
//     <div className="w-full min-h-screen">
//       <Navbar />
//       <div className="w-full bg-[#fcf3ec] h-5"></div>
//       <main className={`${classname} mx-auto text-black`}>
//         {/* Main Content */}
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;
