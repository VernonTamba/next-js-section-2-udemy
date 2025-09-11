import NewsList from "@/app/components/newsList";
import { getLatestNews } from "@/app/lib/news";

export default function LatestPage() {
  const news = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </>
  );
}
