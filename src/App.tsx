import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import Highlights from '@/sections/Highlights';
import ProfileYing from '@/sections/ProfileYing';
import Results from '@/sections/Results';
import Media from '@/sections/Media';

function App() {
  return (
    <div className="site-shell">
      <Header />
      
      <main id="main-content">
        <Hero />
        <Highlights />
        <ProfileYing />
        <Results />
        <Media />
      </main>

      <Footer />
    </div>
  );
}

export default App;
