import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Trajectory from './components/Trajectory';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0"></div>
      <Header />
      <main className="flex-1 relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Hero />
          <Skills />
          <Projects />
          <Trajectory />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App;
