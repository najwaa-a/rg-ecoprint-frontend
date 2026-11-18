export default function ProductStats({ products }) {
  const totalStock = products.reduce((sum, product) => sum + Number(product.stock), 0)
  const categories = new Set(products.map((product) => product.category)).size
  const format = (number) => new Intl.NumberFormat('id-ID').format(number)
  return <div className="stats-grid"><article className="stat-card"><span className="stat-label">TOTAL PRODUK</span><strong>{format(products.length).padStart(2, '0')}</strong><span className="stat-foot">Koleksi terdaftar <b>↗</b></span></article><article className="stat-card stat-card-dark"><span className="stat-label">TOTAL STOK</span><strong>{format(totalStock).padStart(2, '0')}</strong><span className="stat-foot">Item tersedia <b>✳</b></span></article><article className="stat-card"><span className="stat-label">KATEGORI</span><strong>{format(categories).padStart(2, '0')}</strong><span className="stat-foot">Jenis koleksi <b>↗</b></span></article></div>
}
