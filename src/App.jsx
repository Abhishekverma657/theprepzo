import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import TestSeries from './pages/TestSeries';
import Results from './pages/Results';
import StudyMaterial from './pages/StudyMaterial';
import AboutUs from './pages/AboutUs';
import Scholarship from './pages/Scholarship';
import PrepzoStore from './pages/PrepzoStore';
import Blogs from './pages/Blogs';
import News from './pages/News';
import Careers from './pages/Careers';

// Context & Modal
import { EnrollProvider } from './context/EnrollContext';
import EnrollModal from './components/EnrollModal';

function App() {
  return (
    <EnrollProvider>
      <div className="min-h-screen bg-prepzo-bg flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/test-series" element={<TestSeries />} />
            <Route path="/results" element={<Results />} />
            <Route path="/study-material" element={<StudyMaterial />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/store" element={<PrepzoStore />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
        <EnrollModal />
      </div>
    </EnrollProvider>
  );
}

export default App;
