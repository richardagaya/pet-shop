import Layout from './layout';

const Home = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Pet Shop!</h1>
        <p className="text-lg mt-4 text-gray-600">
          Your one-stop shop for all pet needs. Explore our collection of toys, food, and accessories.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
