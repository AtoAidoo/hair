import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Hair Haven
          </Link>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
          </ul>
        </div>
      </nav>
      <main className="py-8">{children}</main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 Hair Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}
