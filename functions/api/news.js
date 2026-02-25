export async function onRequest(context) {
  // context.env berisi environment variables yang Anda set di Cloudflare Dashboard
  const API_KEY = context.env.NEWS_API_KEY;
  
  // Mengambil parameter dari request React frontend Anda
  const { searchParams } = new URL(context.request.url);
  const category = searchParams.get('category') || 'general';

  // URL asli ke News API
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

  try {
    // Worker melakukan fetch ke server News API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Worker mengembalikan hasilnya ke frontend React Anda
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Gagal memuat berita' }), { status: 500 });
  }
}