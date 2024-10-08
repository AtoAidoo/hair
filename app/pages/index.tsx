import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Hair Haven</h1>
      <p className="mb-4">Discover our amazing collection of hair products!</p>
      <Link href="/products" className="bg-blue-500 text-white px-4 py-2 rounded">
        Shop Now
      </Link>
    </div>
  );
}