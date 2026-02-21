// Ganti dengan API Key milik Anda dari newsapi.org
const API_KEY = process.env.REACT_APP_NEWS_API_KEY; 
const BASE_URL = 'https://newsapi.org/v2';

// Fetcher standar untuk SWR
export const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Gagal mengambil data berita');
  }
  return response.json();
};

// Helper untuk menyusun URL Endpoints
export const endpoints = {
  topHeadlines: (category = 'general') => 
    `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`,
  search: (query) => 
    `${BASE_URL}/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`
};