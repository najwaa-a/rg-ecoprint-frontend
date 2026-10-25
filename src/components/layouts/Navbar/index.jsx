import { useState } from 'react'
export default function Navbar() {
 const [open, setOpen] = useState(false)
 return <header className="site-nav"><a href="#top" className="brand" onClick={() => setOpen(false)}><img src="/assets/rg-logo.png" alt=""/><span className="brand-text">RG Ecoprint<small>BOTANICAL CRAFT</small></span></a><button className="menu-button" aria-label="Buka menu navigasi" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button><nav className={`nav-links ${open ? 'is-open' : ''}`}><a className="active" href="#top" onClick={() => setOpen(false)}>Beranda</a><a href="#tentang" onClick={() => setOpen(false)}>Tentang Kami</a><a href="#produk" onClick={() => setOpen(false)}>Katalog Produk</a><a href="#footer" onClick={() => setOpen(false)}>Kontak</a></nav><a href="#produk" className="nav-contact">JELAJAHI KOLEKSI ↗</a></header>
}
