import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import HomeSeminar from './pages/HomeSeminar';
import SeminarPage from './pages/SeminarPage';
import SeminarPageTwo from './pages/SeminarPageTwo';
import BlogPage from './pages/BlogPage';
import HealthPage from './pages/HealthPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import BlogDeatailsPage from './pages/BlogDeatailsPage';
import HeroesPage from './pages/HeroesPage';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ProfilePage from './pages/admin/ProfilePage';
import WebinarPage from './pages/admin/WebinarPage';
import RewardsPage from './pages/admin/RewardsPage';
import AdminPage from './pages/admin/AdminPage';
import Notification from './pages/admin/Notification';

function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/upcomingseminar' element={<HomeSeminar />} />
        <Route path='/seminar' element={<SeminarPage />} />
        <Route path='/seminarpage' element={<SeminarPageTwo />} />
        <Route path='/heroes' element={<HeroesPage />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/details' element={<BlogDeatailsPage />} />
        <Route path='/healths' element={<HealthPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/error' element={<ErrorPage/>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="admin" element={<AdminPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="webinar" element={<WebinarPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
