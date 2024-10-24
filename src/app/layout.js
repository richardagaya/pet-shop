import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 p-4">
        <nav className="container mx-auto">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/Shop" className="text-white hover:text-gray-300">Shop</Link>
            </li>
            <li>
              <Link href="/cart" className="text-white hover:text-gray-300">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2024 Pet Shop. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
