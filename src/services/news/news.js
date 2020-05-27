import mockNews from "../../newsDB/mockNews.json";

const ApiKey = "157aeaa717ab45b2b2b41a30b6e436c1";

const callFetch = async () => {
  const data = await fetch(
    `http://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=${ApiKey}`
  );
  const news = await data.json();
  return news.articles;
};

const newsFetched = () => {
  console.log(process.env.REACT_APP_MOCK, process.env);

  return process.env.REACT_APP_MOCK === "true" ? mockNews : callFetch();
};

export default newsFetched;
