import { useRouter } from 'next/router';

const products = [
  { id: 1, name: 'Silky Smooth Wig', category: 'Wigs', price: 129.99, description: 'A beautiful, natural-looking wig for any occasion.' },
  { id: 2, name: 'Stronghold Hair Pomade', category: 'Hair Care', price: 24.99, description: 'Keep your hair styled all day with our strong hold pomade.' },
  { id: 3, name: 'Volumizing Mascara', category: 'Cosmetics', price: 19.99, description: 'Get lush, voluminous lashes with our popular mascara.' },
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-2">{product.category}</p>
      <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
      <p className="mb-4">{product.description}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
}