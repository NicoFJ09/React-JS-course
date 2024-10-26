import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import NewPost from './NewPost/NewPost';
import PostPage from './PostPage/PostPage';
import About from './About/About';
import Missing from './Missing/Missing';
import EditPost from './EditPost/EditPost';


import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {format} from 'date-fns';  

import api from './api/posts';
import useWindowSize from './Hooks/useWindowSize';
import useAxiosFetch from './Hooks/useAxiosFetch';
import { DataProvider } from './Context/DataContext';

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      post.body.toLowerCase().includes(search.toLowerCase()) || 
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleDelete = async (id) => {
    try{
    await api.delete(`/posts/${id}`);
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  } catch (error) {
    console.error('Error deleting post:', error);
  }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => (post.id === id ? response.data : post))); //to update we use map which creates a new array, a sort of filter
      setEditTitle('');
      setEditBody('');
      navigate(`/`);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  }
  return (
    <div className="App">
      <DataProvider>
      <Header title = "ReactJS Blog" width={width}/>
      <Nav search = {search} setSearch = {setSearch}/>
      <Routes>
        <Route exact path="/" element={
          <Home posts = {searchResults}
          fetchError = {fetchError}
          isLoading = {isLoading}
        />} />
        <Route exact path="/post" element=
        {<NewPost 
        handleSubmit = {handleSubmit}
        postTitle = {postTitle}
        setPostTitle = {setPostTitle}
        postBody = {postBody}
        setPostBody = {setPostBody}
        />} />

<Route path="/edit/:id" element=
        {<EditPost 
        posts = {posts}
        handleEdit = {handleEdit}
        editTitle = {editTitle}
        setEditTitle = {setEditTitle}
        editBody = {editBody}
        setEditBody = {setEditBody}
        />} />

        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete = {handleDelete} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer/>
    </DataProvider>
    </div>
    
  );
}

export default App;