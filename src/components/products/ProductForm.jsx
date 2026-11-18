import { useState } from 'react'
const blank = { name: '', category: 'Fashion', price: '', stock: '', description: '' }
export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState(blank)
  const [expanded, setExpanded] = useState(false)
  const [error, setError] = useState('')
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = (event) => { event.preventDefault(); if (!form.name.trim() || !form.price || !form.stock || Number(form.price) < 0 || Number(form.stock) < 0) { setError('Lengkapi nama, harga, dan stok dengan nilai yang valid.'); return } onAdd({ ...form, name: form.name.trim() }); setForm(blank); setError(''); setExpanded(false) }
  return <section className="form-panel"><button type="button" className="form-toggle" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}><span><span className="plus-icon">{expanded ? '−' : '+'}</span> Tambahkan produk</span><span className="toggle-hint">{expanded ? 'TUTUP FORM' : 'INPUT KOLEKSI BARU ↗'}</span></button>{expanded && <form onSubmit={submit} className="product-form"><label>Nama produk<input name="name" value={form.name} onChange={update} placeholder="Contoh: Syal Ecoprint Liora" /></label><label>Kategori<select name="category" value={form.category} onChange={update}><option>Fashion</option><option>Kain</option><option>Aksesori</option></select></label><label>Harga (Rp)<input name="price" type="number" min="0" value={form.price} onChange={update} placeholder="150000" /></label><label>Stok<input name="stock" type="number" min="0" value={form.stock} onChange={update} placeholder="10" /></label><label className="field-wide">Deskripsi singkat<textarea name="description" value={form.description} onChange={update} placeholder="Ceritakan keunikan produk..." rows="2" /></label>{error && <p className="form-error">{error}</p>}<button className="submit-button" type="submit">Simpan produk <span>↗</span></button></form>}</section>
}
