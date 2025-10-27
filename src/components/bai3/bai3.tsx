import { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  summary: string;
  url: string;
  image_url: string;
  published_at: string;
}

const News = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setArticles(res.data.results))
      .catch(() => setError("Không tải được tin tức"));
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <section>
      <h2> Tin tức Vũ trụ</h2>
      {articles.map((a) => (
        <article key={a.id} style={{ borderBottom: "1px solid #ddd", marginBottom: 16, paddingBottom: 12 }}>
          <img src={a.image_url} alt={a.title} width={220} style={{ borderRadius: 8 }} />
          <h3>{a.title}</h3>
          <p>{a.summary}</p>
          <a href={a.url} target="_blank" rel="noreferrer">
            Đọc thêm...
          </a>
          <p><i>Ngày đăng: {new Date(a.published_at).toLocaleString("vi-VN")}</i></p>
        </article>
      ))}
    </section>
  );
};

export default News;
