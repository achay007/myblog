import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import CommentsList from '../components/CommentsList'
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
export const ArticlePage = () => {

  const [articleInfo, setArticleInfo] = useState({upvotes:0 , comments:[]})

   useEffect( ()=>{

    const loadArticleInfo = async ()=>{
      const response = await axios.get(`/api/articles/${articleId}`)
      const articleInfonew = response.data
      setArticleInfo(articleInfonew)
    }
    loadArticleInfo();
  },[])
  const params = useParams();
  const { articleId } = params;

  const {user,isLoading} = useUser()
  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () =>{
    const response = await axios.put(`/api/articles/${articleId}/upvote`);
    const updatedArticle = response.data
    setArticleInfo(updatedArticle)
  }
  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
      {user ? <button onClick={addUpvote}>Upvote</button>
      : <button>Log in to upvote</button>}
      </div>
      
      <p>This article has {articleInfo.upvotes} upvotes(s)</p>
      {article.content.map((paragraph,i) => (
        <p key={i}>{paragraph}</p>
      ))}

     {user ? <AddCommentForm articleName={articleId}
      onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
        />: <button>Log in to add comment</button>}
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};
export default ArticlePage;
