import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import PostList from '../pages/Posts';
import PostDeatail from '../pages/Posts/detail';
import PostNew from '../pages/Posts/new';
import PostEdit from '../pages/Posts/edit';
import Profile from '../pages/Profile';
import LoginPage from '../pages/Login';
import SignUp from '../pages/SignUp';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts' element={<PostList />} />
      <Route path='/posts/:id' element={<PostDeatail />} />
      <Route path='/posts/new' element={<PostNew />} />
      <Route path='/posts/edit/:id' element={<PostEdit />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  );
}
