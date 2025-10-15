import { Fragment, useEffect, useRef, useState } from "react";

import CardProduct from "../components/Fragments/CardProduct";
import MainLayout from "../components/Layouts/MainLayout";
import { getProducts } from "../services/product.service";
import type { Products } from "../types/products";

// const products = [
//   {
//     id: 1,
//     name: "Colorful RTX 3060 iGame White",
//     variant: "12GB / 8GB",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit placeat maxime autem voluptate voluptates et magni dignissimos non adipisci repudiandae corporis, ea iste odit quibusdam tenetur esse, nemo, incidunt quo.",
//     image: "/images/Colorful RTX 3060 12GB iGame White/Samping.png",
//     link: "/product/Colorful-RTX-3060-iGame-White",
//     price: 5500000,
//     realPrice: 12000000,
//   },
//   {
//     id: 2,
//     name: "Ryzen 7 5800X3D",
//     variant: "12C / 24T",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam nemo, porro excepturi, quas.",
//     image: "/images/Ryzen/Fullset.png",
//     link: "/product/Ryzen-7-5800X3D",
//     price: 10000000,
//     realPrice: 12000000,
//   },
//   {
//     id: 3,
//     name: "AORUS X870 ELITE",
//     variant: "WIFI7",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam nemo, porro excepturi, quas incidunt consequuntur ipsum officia repellendus pariatur, ullam ab soluta? Illo magni porro earum quibusdam vitae non.",
//     image: "/images/AORUS X870/Fullset.png",
//     link: "/product/AORUS-X870-iGame-White",
//     price: 10000000,
//     realPrice: 12000000,
//   },
// ];

const ProductsPage = () => {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    getProducts()
      .then((data) => {
        console.log("fetched", data);
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((total, item) => {
        const product = products.find((product) => product.id === item.id);
        return total + (product?.price ?? 0) * item.quantity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleAddToCart = (id: number) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  };

  const totalPriceRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (totalPriceRef.current) {
      if (cart.length > 0) {
        totalPriceRef.current.style.display = "table-row";
      } else {
        totalPriceRef.current.style.display = "none";
      }
    }
  });

  // useRef addToCart
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart") || "[]"));

  // const handleAddToCartRef = (id: number) => {
  //   cartRef.current = [...cartRef.current, { id, quantity: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  return (
    <MainLayout classname="container">
      <Fragment>
        <div className="my-6">
          <h1 className="pb-10 py-5 text-xl font-semibold tracking-wider">
            MOST POPULAR PRODUCTS
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="w-3/4 my-6 flex flex-col">
            <div className="grid grid-cols-3 gap-6">
              {products.length > 0 &&
                products.map((product) => (
                  <CardProduct key={product.id}>
                    <CardProduct.Header
                      image={product.image}
                      link={product.link}
                    />
                    <CardProduct.Body
                      name={product.title}
                      variant={product.variant}
                    >
                      {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer
                      price={product.price ?? 0}
                      realPrice={product.realPrice ?? 0}
                      handleAddToCart={handleAddToCart}
                      id={product.id}
                    />
                  </CardProduct>
                ))}
            </div>
          </div>
          {/* Cart */}
          <div className="w-1/4 my-6 border-2 text-sm">
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold text-left ml-2 my-2">
                CART
              </h1>
              <div>
                <table className="text-left table-auto border-separate border-spacing-x-3 wrap-anywhere">
                  <thead>
                    <tr>
                      <th>Quantity</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length > 0 &&
                      cart.map((item) => {
                        const product = products.find(
                          (product) => product.id === item.id
                        );
                        if (!product) return null;
                        return (
                          <tr>
                            <td className="text-center">{item.quantity}</td>
                            <td>
                              {product.title.length > 15
                                ? product.title.substring(0, 15) + ".."
                                : product.title}
                            </td>
                            <td className="text-wrap">
                              {" "}
                              {product.price.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "USD",
                              })}
                            </td>
                            <td>
                              {" "}
                              {(item.quantity * product.price).toLocaleString(
                                "id-ID",
                                { style: "currency", currency: "USD" }
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    <tr ref={totalPriceRef}>
                      <td colSpan={3}>
                        <b>Total Price</b>
                      </td>
                      <td>
                        <b>
                          {" "}
                          {totalPrice.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <button className="px-4 py-2 font-semibold rounded-md bg-[#185839] text-white cursor-pointer">
            Load More
          </button>
        </div>
      </Fragment>
    </MainLayout>
  );
};

export default ProductsPage;
