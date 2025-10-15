// import axios from "axios";

// export const getProducts = (callback) => {
//   axios
//     .get("https://fakestoreapi.com/products")
//     .then((res) => callback(res.data))
//     .catch((err) => console.log(err));
// };

// services/product.service.ts
import axios from "axios";
import type { Products } from "../types/products";

export const getProducts = async (): Promise<Products[]> => {
  const res = await axios.get<Products[]>("https://fakestoreapi.com/products");
  return res.data;
};
