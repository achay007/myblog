import React from 'react'
import { Link } from "react-router-dom";
export const ArticlesLists = ({articles}) => {
  return (
    <>
        {articles.map((article) => {
        return (
          <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
          </Link>
        );
      })}
    </>
  )
}
