import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

export const ArticlePage = () => {
  const params = useParams();
  const { articleId } = params;
  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </>
  );
};
export default ArticlePage;
