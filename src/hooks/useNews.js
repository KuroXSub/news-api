import useSWR from 'swr';
import { fetcher, endpoints } from '../services/newsApi';

export function useNews(category = 'general') {
  const { data, error, isLoading } = useSWR(
    endpoints.topHeadlines(category), 
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const validArticles = data?.articles?.filter(
    article => article.title && article.title !== '[Removed]' && article.urlToImage
  ) || [];

  return {
    articles: validArticles,
    isLoading,
    isError: error
  };
}