import {
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  ChevronDown,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 text-white border-t border-[#fcf3ec] py-12">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:px-20 px-6 gap-10">
        {/* Part 1 */}
        <div className="flex flex-col space-y-4 md:max-w-[40%] md:pr-10 md:border-r md:border-neutral-700">
          <img
            src="/images/Hoseki Shops Logo.png"
            alt="Hoseki Logo"
            className="h-15 w-fit"
          />
          <p className="font-semibold text-lg">Get 10% Off</p>
          <p className="text-sm font-light leading-relaxed">
            Your first pair of HOSEKI SHOP when you sign up to receive emails.
          </p>

          <form className="flex flex-col sm:flex-row w-full sm:w-fit rounded-md overflow-hidden">
            <input
              type="text"
              className="p-2 sm:pl-4 w-full sm:w-auto text-black outline-none"
              placeholder="Enter your email"
            />
            <button className="bg-white text-neutral-900 py-2 px-4 font-semibold hover:bg-green-600 hover:text-white transition">
              SIGN UP
            </button>
          </form>

          <p className="text-xs font-extralight leading-relaxed">
            By signing up to our newsletter you agree to our privacy policy.
            Please note: only new subscribers and customers will receive an
            email.
          </p>

          <div className="flex space-x-4 pt-2">
            <Twitter className="cursor-pointer hover:text-green-500 transition" />
            <Instagram className="cursor-pointer hover:text-green-500 transition" />
            <Facebook className="cursor-pointer hover:text-green-500 transition" />
            <Youtube className="cursor-pointer hover:text-green-500 transition" />
          </div>

          <p className="flex items-center text-sm space-x-2">
            <span>Indonesia (IDR Rp)</span>
            <ChevronDown size={16} />
          </p>
        </div>

        {/* Part 2 */}
        <div className="flex flex-wrap justify-between md:w-[60%] gap-8 text-sm font-light">
          {["Help", "About Us", "Customer Service"].map((section, idx) => (
            <div key={idx} className="space-y-2 min-w-[130px]">
              <p className="font-semibold mb-2">{section}</p>
              <ul className="space-y-1">
                <li className="hover:text-green-500 cursor-pointer">
                  Contact Us
                </li>
                <li className="hover:text-green-500 cursor-pointer">
                  Exchanges & Returns
                </li>
                <li className="hover:text-green-500 cursor-pointer">FAQs</li>
                <li className="hover:text-green-500 cursor-pointer">
                  Size Chart
                </li>
                <li className="hover:text-green-500 cursor-pointer">
                  Delivery Info
                </li>
                <li className="hover:text-green-500 cursor-pointer">
                  Track Your Order
                </li>
                <li className="hover:text-green-500 cursor-pointer">
                  Offer T&Cs
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-neutral-400 mt-10 border-t border-neutral-800 pt-5">
        © {new Date().getFullYear()} HOSEKI SHOP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
