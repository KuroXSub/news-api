// URL sekarang mengarah ke backend buatan sendiri (Cloudflare Pages Function)
const BASE_URL = '/api/news';

export const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Gagal mengambil data berita');
  }
  return response.json();
};

export const endpoints = {
  // Hanya mengirimkan kategori, API key sudah diurus oleh backend Cloudflare
  topHeadlines: (category = 'general') => `${BASE_URL}?category=${category}`
};