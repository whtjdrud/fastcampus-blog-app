import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from 'pages/Home';
import PostList from 'pages/Posts';
import PostDeatail from 'pages/Posts/detail';
import PostNew from 'pages/Posts/new';
import PostEdit from 'pages/Posts/edit';
import Profile from 'pages/Profile';
import LoginPage from 'pages/Login';
import SignUp from 'pages/SignUp';
import SignupPage from 'pages/SignUp';

export default function Router() {
  //firebase Auth가 인증되면 true로 변경되는 로직 추가
  const [isAutienticated, setIsAuthenticated] = useState<Boolean>(false);
  return (
    <Routes>
      {isAutienticated ? (
        <>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<PostList />} />
          <Route path='/posts/:id' element={<PostDeatail />} />
          <Route path='/posts/new' element={<PostNew />} />
          <Route path='/posts/edit/:id' element={<PostEdit />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </>
      ) : (
        <>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </>
      )}
    </Routes>
  );
}
