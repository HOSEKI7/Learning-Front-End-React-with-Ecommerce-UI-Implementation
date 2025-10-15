import MainLayout from "../components/Layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout classname="w-full">
      <div className="h-[87vh] w-full bg-[url('https://r4.wallpaperflare.com/wallpaper/417/748/887/geforce-gtx-titan-z-computer-gpus-wallpaper-9836cc3a2fec17097eb0e93252e9dbf0.jpg')] bg-cover bg-center bg-black/60 bg-blend-multiply">
        <div className="container h-full mx-auto flex py-10 text-center items-center justify-center">
          <h1 className="text-7xl">Welcome To HOSEKI SHOP</h1>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
