import NewsList from "../../components/newsList";

export default async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const news = await response.json();

  return (
    <>
      <h1>The News Page</h1>
      <NewsList news={news} />
    </>
  );
}

// Commented out code for server-side rendering example
// "use client";

// import { DUMMY_NEWS } from "@/dummy-news";
// import NewsList from "../../components/newsList";
// import { useEffect, useState } from "react";

// export default function NewsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();
//   const [news, setNews] = useState();

//   function fetchNews() {
//     const response = await fetch("http://localhost:8080/news");

//     if (!response.ok) {
//       setError("Failed to fetch news");
//       setIsLoading(false);
//       throw new Error("Failed to fetch news");
//     }

//     const news = await response.json();
//     setIsLoading(false);
//     setNews(news);
//   }

//   useEffect(() => {
//     fetchNews();
//   });

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   let newsContent = <p>No news found!</p>;

//   if (news) {
//     newsContent = <NewsList news={news} />;
//   }

//   return (
//     <>
//       <h1>The News Page</h1>
//       {newsContent}
//     </>
//   );
// }
