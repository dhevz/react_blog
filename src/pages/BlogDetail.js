import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );
        const response = await request.json();

        setArticle(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  return (
    <section>
      {loading ? (
        <i>loading article</i>
      ) : (
        <>
          <article>
            <img src={article.imageUrl} alt={article.title} />
            <h1>{article.title}</h1>
            <time>{article.publishedAt}</time>
            <p>{article.summary}</p>
            <p>
              <a href={article.url} target="_blank" rel="noreferrer">
                {article.newsSite}
              </a>
            </p>
          </article>
        </>
      )}
    </section>
  );
}
