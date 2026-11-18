import { useEffect, useMemo, useState } from 'react'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import ProductIntro from '@/components/products/ProductIntro'
import ProductStats from '@/components/products/ProductStats'
import ProductForm from '@/components/products/ProductForm'
import ProductList from '@/components/products/ProductList'

export default function App() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua')
  const [notice, setNotice] = useState('')

  // 1. Ambil data produk dari Backend NestJS saat aplikasi pertama kali dibuka (GET)
useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Berikan gambar cadangan jika dari backend tidak ada gambar
          const productsWithImages = data.map((item, index) => ({
            ...item,
            image: item.image || (index === 0 ? '/assets/sepatu-hero.png' : index === 1 ? '/assets/kain-rg.jpg' : '/assets/tas-rg.jpg')
          }))
          setProducts(productsWithImages)
        }
      })
      .catch((err) => console.error('Gagal memuat data:', err))
  }, [])

  const filteredProducts = useMemo(() => products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) && (category === 'Semua' || product.category === category)
  ), [products, search, category])

  // 2. Tambah produk baru ke Backend NestJS (POST)
  const addProduct = async (form) => {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          description: form.description,
          price: Number(form.price),
          category: form.category,
          stock: Number(form.stock),
        }),
      })

      if (!response.ok) {
        throw new Error('Gagal menambahkan produk')
      }

      const newProduct = await response.json()
      setProducts((current) => [newProduct, ...current])
      setNotice(`${form.name} berhasil ditambahkan ke katalog backend.`)
      window.setTimeout(() => setNotice(''), 3500)
    } catch (error) {
      console.error(error)
      setNotice('Gagal menambahkan produk (cek validasi DTO).')
      window.setTimeout(() => setNotice(''), 3500)
    }
  }

  // 3. Hapus produk dari Backend NestJS (DELETE)
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Gagal menghapus produk')
      }

      setProducts((current) => current.filter((product) => product.id !== id))
    } catch (error) {
      console.error('Gagal menghapus produk:', error)
    }
  }

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