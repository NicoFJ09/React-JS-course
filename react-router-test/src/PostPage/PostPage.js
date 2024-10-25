import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}><button className="editButton">Edit post</button></Link>
            <button className="deleteButton" onClick={() => handleDelete(post.id)}>Delete post</button>
          </>
        ) : (
          <>
            <h2>Post not found</h2>
            <p>Well, that sucks.</p>
            <p>
              <Link to="/">Back to home</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;