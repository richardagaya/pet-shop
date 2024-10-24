import Layout from '../layout';

const Cart = () => {
  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Your Cart</h2>
        <p className="text-lg mt-4 text-gray-600">
          Your cart is empty. Add items to your cart from the shop.
        </p>
      </div>
    </Layout>
  );
};

export default Cart;
