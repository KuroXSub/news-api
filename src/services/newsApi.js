const BASE_URL = 'https://newsapi.org/v2';
const PAGE_SIZE = 10;

export const fetchNews = async (query = '', category = '', page = 1) => {
  try {
    // Jika ada query TANPA kategori, gunakan /everything
    if (query && !category) {
      const url = `${BASE_URL}/everything?q=${query}&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.status === 'ok') {
        return {
          articles: data.articles,
          totalResults: data.totalResults,
          currentPage: page
        };
      }
      throw new Error(data.message || 'Failed to fetch news');
    }
    
    // Untuk semua kasus lain (dengan kategori atau tanpa query), gunakan /top-headlines
    let url = `${BASE_URL}/top-headlines?country=us&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    
    if (category) {
      url += `&category=${category}`;
    }
    
    // Jika ada query DAN kategori, tambahkan q parameter (beberapa sumber mungkin mendukung)
    if (query && category) {
      url += `&q=${query}`;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'ok') {
      return {
        articles: data.articles,
        totalResults: data.totalResults,
        currentPage: page
      };
    }
    throw new Error(data.message || 'Failed to fetch news');
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      articles: [],
      totalResults: 0,
      currentPage: 1
    };
  }
};