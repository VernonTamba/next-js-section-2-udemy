import NewsList from "@/app/components/newsList";
import { getNewsForYear } from "@/app/lib/news";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
