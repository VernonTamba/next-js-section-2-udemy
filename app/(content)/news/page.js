import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "../components/newsList";

export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
