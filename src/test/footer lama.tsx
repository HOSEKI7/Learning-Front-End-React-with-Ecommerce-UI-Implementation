import {
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  ChevronDown,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" w-[100%] bg-neutral-900 py-15 border-t-bg-[#fcf3ec] border-t-1 text-white">
      <div className="flex flex-wrap justify-between px-60">
        {/* part 1 */}
        <div className="flex-col space-y-3 text-wrap max-w-[40%] pr-[17%] border-r-2">
          <img src="/images/Hoseki Shops Logo.png" alt="" className="h-10" />
          <p className="font-semibold">get 10% off</p>
          <p className="text-xs font-extralight">
            Your first pair of HOSEKI SHOP when you sign up to receive emails.
          </p>
          <form action="" className="w-fit rounded-[5px]">
            <input
              type="text"
              className="max-h-max p-2 pl-4 border-1"
              placeholder="Enter Your Email"
            />
            <button className="bg-white text-neutral-900 py-2 px-3 cursor-pointer border-1 border-white hover:border-green-700">
              SIGN UP
            </button>
          </form>
          <p className="text-xs font-extralight">
            by signing op to our newsltter you are agreeing to our privacy
            policy please note: only new subscribers and customers will receive
            an email
          </p>
          <div className="flex space-x-3">
            <Twitter />
            <Instagram />
            <Facebook />
            <Youtube />
          </div>
          <p className="flex">
            Indonesia (IDR Rp) <span>{<ChevronDown />}</span>
          </p>
        </div>

        {/* part 2 */}
        <div className="flex flex-wrap justify-between w-[60%] gap-5 pl-[5%] pt-[1%] text-sm font-extralight">
          <div className="flex-cols space-y-2">
            <ul>
              <p className="font-semibold">Help</p>
              <li>Contact us</li>
              <li>Exchanges & returns</li>
              <li>FAQs</li>
              <li>Size Chart</li>
              <li>Delivery info</li>
              <li>Track your order</li>
              <li>Offer T&Cs</li>
            </ul>
          </div>
          <div className="flex-cols space-y-2">
            <ul>
              <p className="font-semibold">About us</p>
              <li>Contact us</li>
              <li>Exchanges & returns</li>
              <li>FAQs</li>
              <li>Size Chart</li>
              <li>Delivery info</li>
              <li>Track your order</li>
              <li>Offer T&Cs</li>
            </ul>
          </div>
          <div className="flex-cols space-y-2">
            <ul>
              <p className="font-semibold">Help</p>
              <li>Contact us</li>
              <li>Exchanges & returns</li>
              <li>FAQs</li>
              <li>Size Chart</li>
              <li>Delivery info</li>
              <li>Track your order</li>
              <li>Offer T&Cs</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
