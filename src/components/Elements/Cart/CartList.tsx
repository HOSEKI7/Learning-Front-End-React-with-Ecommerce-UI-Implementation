type CartProps = {
  cart: {
    id: number;
    quantity: number;
  }[];
};

const CartList = ({ cart }: CartProps) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-xs mx-auto border-2">
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.id} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
