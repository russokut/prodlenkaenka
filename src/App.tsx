import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import MiniGarden from './pages/MiniGarden';
import AfterSchool from './pages/AfterSchool';
import ExtraClasses from './pages/ExtraClasses';
import Creativity from './pages/Creativity';
import SummerCamp from './pages/SummerCamp';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

const NotFound = () => (
  <div className="py-40 text-center px-4">
    <div className="text-9xl font-display font-bold text-brand-yellow mb-4">404</div>
    <h1 className="text-4xl font-display font-bold text-slate-800 mb-6">Упс! Страница потерялась</h1>
    <p className="text-slate-500 mb-10 max-w-md mx-auto">
      Кажется, эта страница ушла на прогулку. Вернитесь на главную, там много интересного!
    </p>
    <a href="/" className="btn-primary inline-block">Вернуться на главную</a>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mini-garden" element={<MiniGarden />} />
          <Route path="after-school" element={<AfterSchool />} />
          <Route path="extra-classes" element={<ExtraClasses />} />
          <Route path="creativity" element={<Creativity />} />
          <Route path="summer-camp" element={<SummerCamp />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <CookieBanner />
    </Router>
  );
}
