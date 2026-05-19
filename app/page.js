export default function PhantomPhoneStore() {
  const products = [
    {
      name: 'iPhone 15 Pro Max',
      price: '₦1,750,000',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Samsung S24 Ultra',
      price: '₦1,450,000',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'iPhone 14 Pro',
      price: '₦1,250,000',
      image: 'https://images.unsplash.com/photo-1663499482523-1c0db5b7d7d7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Samsung S23 Ultra',
      price: '₦1,100,000',
      image: 'https://images.unsplash.com/photo-1678911820864-e5c6dfdbeb58?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <h1 className="text-2xl font-bold tracking-wide">Phantom Phone Store</h1>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#shop" className="hover:text-gray-300">Shop</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a href="#faq" className="hover:text-gray-300">FAQs</a>
        </div>

        <a
          href="https://wa.me/2349034118950"
          className="bg-white text-black px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition"
        >
          WhatsApp Order
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="px-8 py-24 text-center bg-gradient-to-b from-gray-900 to-black"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Premium Phones <br />
          Delivered Fast
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
          Buy authentic iPhones and Samsung S-series devices from Phantom Phone Store.
          Fast delivery, trusted service, and the hottest deals in Keffi, Nasarawa State.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#shop"
            className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Shop Now
          </a>

          <a
            href="https://wa.me/2349034118950"
            className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="px-8 py-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search phones..."
            className="w-full md:w-1/2 bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 outline-none"
          />

          <div className="flex gap-3">
            <button className="bg-white text-black px-5 py-3 rounded-2xl font-semibold">All</button>
            <button className="bg-gray-900 px-5 py-3 rounded-2xl">iPhone</button>
            <button className="bg-gray-900 px-5 py-3 rounded-2xl">Samsung</button>
          </div>
        </div>
      </section>

      {/* Hot Deals */}
      <section id="shop" className="px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-4xl font-bold">🔥 Hot Deals</h3>
          <p className="text-gray-400">Latest stock available</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">
                <h4 className="text-2xl font-semibold mb-2">{product.name}</h4>
                <p className="text-gray-400 mb-4">Premium quality device available now.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">{product.price}</span>

                  <a
                    href="https://wa.me/2349034118950"
                    className="bg-white text-black px-4 py-2 rounded-xl font-semibold"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">About Phantom Phone Store</h3>

          <p className="text-gray-400 text-lg leading-8">
            Phantom Phone Store is a trusted smartphone business located in Keffi, Nasarawa State.
            We specialize in premium iPhones and Samsung S-series devices with excellent customer service,
            affordable prices, and reliable nationwide delivery.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-8 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">Customer Reviews</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-3xl">
            <p className="text-gray-300 mb-4">
              "Very reliable seller. My iPhone arrived exactly as shown."
            </p>
            <h4 className="font-bold">— Musa A.</h4>
          </div>

          <div className="bg-gray-900 p-6 rounded-3xl">
            <p className="text-gray-300 mb-4">
              "Fast delivery and affordable prices. Highly recommended."
            </p>
            <h4 className="font-bold">— Fatima S.</h4>
          </div>

          <div className="bg-gray-900 p-6 rounded-3xl">
            <p className="text-gray-300 mb-4">
              "Customer service was excellent. I'll buy again."
            </p>
            <h4 className="font-bold">— David K.</h4>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="px-8 py-20 bg-gray-950 text-center">
        <h3 className="text-4xl font-bold mb-6">Delivery Information</h3>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
          We deliver phones safely across Nigeria. Same-day delivery available in some areas.
          Secure payment methods and trusted logistics partners ensure your devices arrive safely.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 text-center">
        <h3 className="text-4xl font-bold mb-8">Contact Us</h3>

        <div className="space-y-4 text-lg text-gray-300">
          <p>📍 Keffi, Nasarawa State</p>
          <p>📞 09034118950 / 08034118950</p>
          <p>💬 WhatsApp Available</p>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.instagram.com/apple_5212"
            className="bg-gray-900 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@apple_5212"
            className="bg-gray-900 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
          >
            TikTok
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-8 py-20 bg-gray-950">
        <h3 className="text-4xl font-bold text-center mb-12">FAQs</h3>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-900 p-6 rounded-3xl">
            <h4 className="font-bold text-xl mb-2">Do you deliver nationwide?</h4>
            <p className="text-gray-400">Yes, we deliver across Nigeria.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-3xl">
            <h4 className="font-bold text-xl mb-2">Are your phones original?</h4>
            <p className="text-gray-400">Yes, we sell authentic devices only.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-3xl">
            <h4 className="font-bold text-xl mb-2">How can I order?</h4>
            <p className="text-gray-400">You can place orders directly through WhatsApp.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 border-t border-gray-800 text-center text-gray-500">
        <p>© 2026 Phantom Phone Store. All rights reserved.</p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/2349034118950"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl font-bold hover:scale-110 transition"
      >
        WhatsApp
      </a>
    </div>
  );
}
