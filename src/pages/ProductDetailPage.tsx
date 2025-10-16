import { useParams } from "react-router";

const ProductDetailPage = () => {
  const params = useParams<{ productSlug: string }>();

  return (
    <>
      <div className="my-6">
        <p className="text-xs font-light px-5">
          HOME / PRODUCTS / PRODUCT DETAIL
        </p>
        <div className="flex flex-wrap w-full">
          <div className="w-[70%] grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
            <div className="w-full h-fit rounded-xs bg-neutral-200 ">
              <img
                src="/images/Colorful RTX 3060 12GB iGame White/Fullset.png"
                alt="Gambar 1"
                className="w-full h-fit rounded-lg"
              />
            </div>
            <div className="w-full h-fit rounded-xs bg-neutral-200">
              <img
                src="/images/Colorful RTX 3060 12GB iGame White/Samping.png"
                alt="Gambar 1"
                className="w-full h-fit rounded-lg"
              />
            </div>
            <div className="w-full h-fit rounded-xs bg-neutral-200">
              <img
                src="/images/Colorful RTX 3060 12GB iGame White/Bawah.png"
                alt="Gambar 1"
                className="w-full h-fit rounded-lg"
              />
            </div>
            <div className="w-full h-fit rounded-xs bg-neutral-200">
              <img
                src="/images/Colorful RTX 3060 12GB iGame White/Atas.png"
                alt="Gambar 1"
                className="w-full h-fit rounded-lg"
              />
            </div>
          </div>

          <div className="text-sm w-[30%] p-4 sm:text-xl">
            <p className="text-lg font-medium sm:text-2xl">
              {params.productSlug}
            </p>
            <div className="flex flex-wrap gap-3 w-fit">
              <p className="tracking-wider text-red-400">Rp 1.600.000</p>
              <p className="line-through tracking-wider">Rp 5.450.000</p>
            </div>
            <div className="text-xs md:text-sm">
              <p className="font-light">
                Rise your dream with the most{" "}
                <span className="font-bold">powerful performance</span> with low
                latency and AI image Scaling to boost untill the peak
                performance
              </p>

              <div className="flex gap-3">
                <p>choose your prefer variant </p>
                <p>caspian blue</p>
              </div>

              <div className="flex gap-2 flex-col mt-4">
                <p className="text-sm">choose your prefer variant </p>
                <div className="flex flex-wrap text-center gap-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex flex-row items-center gap-2">
                      <button className="px-2 py-1 border-1 hover:bg-green-800 hover:text-white transition-colors">
                        caspian blue
                      </button>
                      {i < 4 && (
                        <p className="flex justify-center items-center">-</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailPage;
