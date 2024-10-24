import Layout from '../layout';

const products = [
  { id: 1, name: 'Dog Food', price: 20 },
  { id: 2, name: 'Cat Toy', price: 10 },
  { id: 3, name: 'Bird Cage', price: 50 },
];

const Shop = () => {
  return (
    <Layout>
      <div>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Shop Our Products</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <li key={product.id} className="border p-4 rounded shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-2 text-lg text-gray-700">${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Shop;
