import {createContext, useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import {format} from 'date-fns';  

import api from '../api/posts';
import useWindowSize from '../Hooks/useWindowSize';
import useAxiosFetch from '../Hooks/useAxiosFetch';

const DataContext = createContext();

export const DataProvider = ({children}) => {

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

    return (
    <DataContext.Provider value={{
        width //I COULD PASS MORE VALUES HERE
        
    }}>
        {children}
    </DataContext.Provider>
    );
}

export default DataContext;