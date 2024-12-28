import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageLayout } from './components/Layout/PageLayout';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { Manifesto } from './pages/Manifesto';
import { News } from './pages/News';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;