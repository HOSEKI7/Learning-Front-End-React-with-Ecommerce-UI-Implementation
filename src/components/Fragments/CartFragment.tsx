import React from "react";

interface CartFragmentProps {
  isVisible?: boolean;
}

const CartFragment: React.FC<CartFragmentProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute top-full right-0 z-50">
      <div className="h-2 w-full" />
      <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-6">
        <div className="flex flex-col text-left mb-5">
          <h5 className="text-lg font-bold">CART</h5>
          <p className="text-gray-400 text-sm">Newest Added</p>
        </div>
        <div className="flex items-center justify-center"></div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFragment;
