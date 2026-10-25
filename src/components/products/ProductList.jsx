import ProductCard from './ProductCard'
export default function ProductList({ products, onDelete }) {
  if (!products.length) return <div className="empty-state"><span>✳</span><h3>Belum ada data Produk</h3><p>Belum ada produk yang cocok. Tambahkan produk baru atau ubah kata pencarian.</p></div>
  return <div className="products-grid">{products.map((product, index) => <ProductCard key={product.id} product={product} index={index} onDelete={onDelete} />)}</div>
}
