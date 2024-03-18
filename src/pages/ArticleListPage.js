import React from "react";
import articles from "./article-content";
import { ArticlesLists } from "../components/ArticlesLists";
export const ArticleListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesLists articles={articles} />
    </>
  );
};
export default ArticleListPage;
