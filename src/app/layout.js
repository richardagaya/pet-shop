import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pet Shop</title>
        <meta name="description" content="Find all your pet needs at our shop!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-lg">Pet Shop</h1>
      </header>

      <main className="p-4">
        <h2 className="font-bold text-xl mb-4">Featured Pets</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border p-4 flex flex-col items-center">
            <img src="/dog1.jpg" alt="Cute Dog" className="w-full h-auto mb-2"/>
            <span>Dog Food</span>
            <span>$20.99</span>
          </div>
          <div className="border p-4 flex flex-col items-center">
            <img src="/cat1.jpg" alt="Cute Cat" className="w-full h-auto mb-2"/>
            <span>Cat Toy</span>
            <span>$5.99</span>
          </div>
          <div className="border p-4 flex flex-col items-center">
            <img src="/parrot.jpg" alt="Colorful Parrot" className="w-full h-auto mb-2"/>
            <span>Parrot Feathers Care</span>
            <span>$15.99</span>
          </div>
          <div className="border p-4 flex flex-col items-center">
            <img src="/fish.jpg" alt="Fish" className="w-full h-auto mb-2"/>
            <span>Fish Tank Filters</span>
            <span>$22.99</span>
          </div>
        </div>
      </main>

      <footer className="bg-gray-700 text-white text-center p-4">
        © 2024 Pet Shop. All rights reserved.
      </footer>
    </div>
  )
}
