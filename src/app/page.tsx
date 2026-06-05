'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <main className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Selamat Datang di Study Club</h1>
        <p className="text-lg text-gray-600 mb-8">
          Platform belajar bersama untuk meningkatkan skill dan pengetahuan Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pendaftaran"
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Daftar Sekarang
          </Link>
          <Link
            href="/pendaftaran"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>
      </main>
    </div>
  );
}
