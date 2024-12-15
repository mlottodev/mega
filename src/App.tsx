import { PageLayout } from './components/Layout/PageLayout';
import { Hero } from './components/Hero/Hero';
import { Timeline } from './components/Timeline/Timeline';
import { Footer } from './components/Layout/Footer';
import { timelineEvents } from './data/timelineEvents';

function App() {
  return (
    <PageLayout>
      <Hero />
      
      <section id="timeline" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the rich history and cultural evolution of the Esan people through centuries of tradition, culture, and resilience that have shaped our identity.
            </p>
          </div>
          
          <Timeline events={timelineEvents} />
        </div>
      </section>
      
      <Footer />
    </PageLayout>
  );
}

export default App;