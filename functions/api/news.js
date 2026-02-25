export async function onRequest(context) {
  const API_KEY = context.env.NEWS_API_KEY;
  const { searchParams } = new URL(context.request.url);
  const category = searchParams.get('category') || 'general';

  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'KuroNews-App/1.0',
      }
    });
    
    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Gagal memuat berita' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}