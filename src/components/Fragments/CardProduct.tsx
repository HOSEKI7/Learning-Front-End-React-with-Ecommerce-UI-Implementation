import type React from "react";
import Button from "../Elements/Button/button";

type CardProductProps = {
  children: React.ReactNode;
};

const CardProduct = (props: CardProductProps) => {
  const { children } = props;

  return (
    <div className="w-full flex flex-col gap-5 justify-between">{children}</div>
  );
};

type HeaderProps = {
  image: string;
  link?: string;
};

const Header = (props: HeaderProps) => {
  const { image, link } = props;

  return (
    <div className="bg-[#fcf3ec] p-3 overflow-hidden hover:border-8 rounded hover:border-white hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]">
      <a href={link}>
        <img
          src={image}
          alt=""
          className="min-h-full min-w-full transform transition-transform duration-300 hover:scale-110"
        />
      </a>
    </div>
  );
};

type BodyProps = {
  name: string;
  children: string;
  variant?: string;
};

const Body = (props: BodyProps) => {
  const { name, variant, children } = props;

  return (
    <div className="space-y-2">
      <div>
        <h3 className="text-base">{name}</h3>
        <p className="text-xs font-light">{variant}</p>
      </div>
      <div>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
};

type FooterProps = {
  price: number;
  realPrice: number;
  handleAddToCart: (id: number) => void;
  id: number;
};

const Footer = (props: FooterProps) => {
  const { price, realPrice, handleAddToCart, id } = props;

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col items-start">
        <p className="text-red-500 tracking-wider font-light">
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
        <p className="line-through tracking-wider font-light">
          {realPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </div>
      <div className="flex items-end">
        <Button
          type="button"
          classname="bg-[#185839]"
          onClick={() => handleAddToCart(id)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
