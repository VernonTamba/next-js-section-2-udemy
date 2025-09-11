import Link from "next/link";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
} from "@/app/lib/news";
import NewsList from "@/app/components/newsList";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter ? filter[0] : undefined;
  const selectedMonth = filter ? filter[1] : undefined;

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYear(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter. Please adjust your values!");
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = selectedYear
              ? `/archive/${selectedYear}/${link}`
              : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {newsContent}
    </header>
  );
}
