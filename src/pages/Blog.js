import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );

      const response = await request.json();

      setArticles(response);

      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>Blog</h1>
      <p>ini adalh isi dari blog nya</p>

      {loading && <i> loading article</i>}
      {!loading && (
        <div>
          {articles.map(function (article) {
            return (
              <article key={article.id}>
                <h2>
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h2>
                <time>{article.publishedAt}</time>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
