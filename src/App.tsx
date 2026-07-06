import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import Highlights from '@/sections/Highlights';
import Profile from '@/sections/Profile';
import Ying from '@/sections/Ying';
import Results from '@/sections/Results';
import Media from '@/sections/Media';

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      
      <main id="main-content">
        <Hero />
        <Highlights />
        <Profile />
        <Ying />
        <Results />
        <Media />
      </main>

      <Footer />
    </div>
  );
}

export default App;
