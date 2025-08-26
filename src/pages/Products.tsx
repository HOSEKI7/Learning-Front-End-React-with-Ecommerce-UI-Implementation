import { useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import MainLayout from "../components/Layouts/MainLayout";

const products = [
  {
    id: 1,
    name: "Colorful RTX 3060 iGame White",
    variant: "12GB / 8GB",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit placeat maxime autem voluptate voluptates et magni dignissimos non adipisci repudiandae corporis, ea iste odit quibusdam tenetur esse, nemo, incidunt quo.",
    image: "/images/Colorful RTX 3060 12GB iGame White/Samping.png",
    link: "/product/Colorful-RTX-3060-iGame-White",
    price: 5500000,
    realPrice: 12000000,
  },
  {
    id: 2,
    name: "Ryzen 7 5800X3D",
    variant: "12C / 24T",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam nemo, porro excepturi, quas.",
    image: "/images/Ryzen/Fullset.png",
    link: "/product/Ryzen-7-5800X3D",
    price: 10000000,
    realPrice: 12000000,
  },
  {
    id: 3,
    name: "AORUS X870 ELITE",
    variant: "WIFI7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam nemo, porro excepturi, quas incidunt consequuntur ipsum officia repellendus pariatur, ullam ab soluta? Illo magni porro earum quibusdam vitae non.",
    image: "/images/AORUS X870/Fullset.png",
    link: "/product/AORUS-X870-iGame-White",
    price: 10000000,
    realPrice: 12000000,
  },
];

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      quantity: 1,
    },
  ]);

  const handleAddToCart = (id: number) => {
    setCart([
      ...cart,
      {
        id,
        quantity: 1,
      },
    ]);
  };

  return (
    <MainLayout classname="max-w-[1280px]">
      <div className="my-6 flex flex-col">
        <h1 className="pb-10 py-5 text-xl font-semibold tracking-wider">
          MOST POPULAR PRODUCTS
        </h1>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} link={product.link} />
              <CardProduct.Body name={product.name} variant={product.variant}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                realPrice={product.realPrice}
                handleAddToCart={handleAddToCart}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button className="px-4 py-2 font-semibold rounded-md bg-[#185839] text-white cursor-pointer">
          Load More
        </button>
      </div>
      <div className="flex flex-col justify-center items-center max-w-xs mx-auto border-2">
        <h1 className="text-center font-bold text-3xl">Cart</h1>
        <div className="flex justify-center items-center my-3">
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.id} - {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
