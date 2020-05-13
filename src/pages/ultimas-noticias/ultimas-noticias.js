import React, { useState, useEffect } from "react";
import "./ultimas-noticias.scss";
import Layout from "../../components/layout/layout";
import newsFetched from "../../services/news/news";
//import Spinner from "../../components/spinner/spinner";

const UltimasNoticias = () => {
  const [news, setNews] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  // setTimeout(function () {
  //   setLoading(false);
  // }, 1000);

  const fetchNews = async () => {
    const articles = await newsFetched();
    setNews(articles);
  };
  return (
    // loading ? <Spinner />
    // :
    <Layout>
      <content className="post-list">
        <h1>Ultimas Noticias</h1>
        {news.map((article) => (
          <article className="post-list__post" key={article.url}>
            <img
              className="post-list__post--image"
              src={article.urlToImage}
              alt={article.title}
            />
            <span className="post-list__post--overlay">
              <h4>{article.title}</h4>
              <p>{article.description}</p>
            </span>
          </article>
        ))}
      </content>
    </Layout>
  );
};

export default UltimasNoticias;
