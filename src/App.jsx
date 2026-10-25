import { useMemo, useState } from 'react'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import ProductIntro from '@/components/products/ProductIntro'
import ProductStats from '@/components/products/ProductStats'
import ProductForm from '@/components/products/ProductForm'
import ProductList from '@/components/products/ProductList'

const initialProducts = [
  { id: 1, name: 'Sepatu Ecoprint', category: 'Fashion', price: 275000, stock: 8, description: 'Sepatu dengan aksen motif daun alami.', image: '/assets/sepatu-hero.png' },
  { id: 2, name: 'Kain Ecoprint Liora', category: 'Kain', price: 185000, stock: 12, description: 'Kain bermotif alami dengan karakter unik.', image: '/assets/kain-rg.jpg' },
  { id: 3, name: 'Tas Motif Daun', category: 'Aksesori', price: 145000, stock: 6, description: 'Tas kain dengan sentuhan motif botani.', image: '/assets/tas-rg.jpg' },
  { id: 4, name: 'Kipas Ecoprint', category: 'Aksesori', price: 65000, stock: 15, description: 'Kipas dekoratif dengan pola tumbuhan.', image: '/assets/kipas-rg.jpg' },
]

export default function App() {
  const [products, setProducts] = useState(initialProducts)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua')
  const [notice, setNotice] = useState('')
  const filteredProducts = useMemo(() => products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) && (category === 'Semua' || product.category === category)
  ), [products, search, category])

  const addProduct = (form) => {
    const newProduct = { ...form, id: Date.now(), price: Number(form.price), stock: Number(form.stock), image: '/assets/liora-cover.png' }
    setProducts((current) => [newProduct, ...current])
    setNotice(`${form.name} berhasil ditambahkan ke katalog.`)
    window.setTimeout(() => setNotice(''), 3500)
  }
  const deleteProduct = (id) => setProducts((current) => current.filter((product) => product.id !== id))

  return <div className="app-shell"><Navbar />
    <main>
      <ProductIntro />
      <section className="catalog-section" id="produk">
        <div className="section-heading"><div><p className="eyebrow">✧ KATALOG PRODUK</p><h2>Produk dengan cerita <em>alami.</em></h2><p className="section-copy">Kelola koleksi pilihan RG Ecoprint dalam satu tempat.</p></div><span className="catalog-mark">RG / 01</span></div>
        <ProductStats products={products} />
        <ProductForm onAdd={addProduct} />
        {notice && <p className="notice" role="status">{notice}</p>}
        <div className="filter-row"><label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Cari nama produk..." aria-label="Cari nama produk" /></label><label className="category-filter"><span>Kategori</span><select value={category} onChange={(event) => setCategory(event.target.value)}><option>Semua</option><option>Fashion</option><option>Kain</option><option>Aksesori</option></select></label></div>
        <ProductList products={filteredProducts} onDelete={deleteProduct} />
      </section>
      <section className="story-section" id="tentang"><div className="story-image"><img src="/assets/liora-motif.png" alt="Detail motif daun alami pada kain ecoprint" /></div><div className="story-copy"><p className="eyebrow">✧ DARI ALAM, UNTUK KESEHARIAN</p><h2>Setiap helai daun punya <em>kisahnya.</em></h2><p>RG Ecoprint mengolah keindahan bentuk dan warna alami tumbuhan menjadi motif yang khas. Setiap karya memiliki karakter tersendiri, sekaligus mengajak kita lebih dekat dengan alam.</p><a className="text-link" href="#produk">Jelajahi katalog <span>↗</span></a></div></section>
    </main><Footer />
  </div>
}
