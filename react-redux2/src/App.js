import './App.css';
// import Counter from './features/counter/Counter';
import PostsList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";
import Layout from './components/Layout';
import EditPostForm from './features/posts/EditPostForm';
import { Route, Routes } from 'react-router-dom';
import SinglePostPage from './features/posts/SinglePostPage';


function App() {
  

 
  return (
  //   <main className="App">
      
  //   {/* <Counter />
  //   <AddPostForm />
  //   <PostsList /> */}
    
  // </main>

  <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<PostsList />} />
    <Route path="post">
      <Route index element={<AddPostForm />} />
      <Route path=":postId" element={<SinglePostPage />} />
      <Route path="edit/:postId" element={<EditPostForm />} />
    </Route>
  </Route>
</Routes>

  );
}

export default App;
