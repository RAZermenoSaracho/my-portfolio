import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import usePortfolio from './hooks/usePortfolio';

function App() {
  const { status, data, retry } = usePortfolio();

  return (
    <div className="app">
      <Navbar profile={data?.profile} />
      <Hero profile={data?.profile} />
      {status === 'ready' ? (
        <>
          <About profile={data.profile} skills={data.skills} />
          <Experience experience={data.experience} />
          <Education education={data.education} certifications={data.certifications} languages={data.languages} />
          <Projects projects={data.projects} />
          <Contact links={data.profile.links} />
        </>
      ) : (
        <section id="projects" style={{ minHeight: '100vh', textAlign: 'center', padding: '4rem 1rem' }}>
          {status === 'loading' ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>Couldn't load the portfolio right now. Please try again later.</p>
              <button type="button" onClick={retry}>Retry</button>
            </>
          )}
        </section>
      )}
      <Footer profile={data?.profile} />
    </div>
  );
}

export default App;
