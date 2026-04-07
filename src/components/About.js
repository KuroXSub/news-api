import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 transition-colors">
      <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-8">Informasi Website</h2>
      
      <div className="space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        
        <section>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Tentang Proyek (Portofolio)</h3>
          <p>
            Website ini merupakan sebuah proyek portofolio yang dibangun untuk mendemonstrasikan 
            kemampuan pengembangan antarmuka (Frontend) menggunakan <strong>React.js</strong> dan <strong>Tailwind CSS</strong>. 
            Proyek ini difokuskan pada responsivitas, integrasi API, dan transisi UI yang mulus seperti fitur Dark/Light Mode.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Sumber API & Cara Mendapatkannya</h3>
          <p>
            Berita yang disajikan pada website ini diambil secara real-time dari layanan pihak ketiga yaitu <a href="https://newsapi.org" target="_blank" rel="noreferrer" className="text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline">NewsAPI.org</a>. 
            <br className="mb-2"/>
            Jika Anda ingin mengembangkan aplikasi serupa, Anda bisa mendapatkan API Key secara gratis dengan melakukan registrasi di situs resmi mereka. Setelah memiliki akun, kunci API (API Key) akan diberikan dan dapat digunakan pada Endpoint mereka.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Ketentuan Penggunaan API</h3>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 rounded-xl border border-amber-200 dark:border-amber-800/50 mt-3">
            <p className="text-sm">
              <strong>Pemberitahuan Penting:</strong> Berdasarkan kebijakan NewsAPI, paket API gratis (Developer Plan) <strong>hanya diizinkan untuk digunakan di lingkungan pengembangan (localhost / development)</strong>. 
              <br/><br/>
              Jika website ini di-deploy secara publik (production maupun staging) melalui layanan seperti Vercel, Netlify, atau Github Pages menggunakan API gratis, silakan upgrade ke paket berbayar.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}