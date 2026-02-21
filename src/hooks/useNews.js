import useSWR from 'swr';
import { fetcher, endpoints } from '../services/newsApi';

export function useNews(category = 'general') {
  const { data, error, isLoading } = useSWR(
    endpoints.topHeadlines(category), 
    fetcher,
    {
      revalidateOnFocus: false, // Mencegah fetch ulang tiap kali ganti tab browser (hemat kuota API)
    }
  );

  // NewsAPI kadang mengembalikan artikel tanpa judul atau status "Removed"
  // Kita filter artikel-artikel cacat tersebut di sini
  const validArticles = data?.articles?.filter(
    article => article.title && article.title !== '[Removed]' && article.urlToImage
  ) || [];

  return {
    articles: validArticles,
    isLoading,
    isError: error
  };
}