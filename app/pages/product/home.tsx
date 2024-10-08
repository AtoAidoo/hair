import Link from 'next/link';

const products = [
  { id: 1, name: 'Silky Smooth Wig', category: 'Wigs', price: 129.99 },
  { id: 2, name: 'Stronghold Hair Pomade', category: 'Hair Care', price: 24.99 },
  { id: 3, name: 'Volumizing Mascara', category: 'Cosmetics', price: 19.99 },
];

export default function Products() {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="border p-4 rounded hover:shadow-lg">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  