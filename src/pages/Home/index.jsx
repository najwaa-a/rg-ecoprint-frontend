import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-primary-50">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Keindahan Alam dalam <span className="text-primary-600">Setiap Motif</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          RG Ecoprint menghadirkan produk ecoprint ramah lingkungan dengan sentuhan seni.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/layanan"
            className="rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
          >
            Lihat Layanan
          </Link>
          <Link
            to="/kontak"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-50"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}