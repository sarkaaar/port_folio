import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
// import "./App.css";

function App() {
  return (
    <>

      <Header />
      <div>
        <About />
        <div className="bg-slate-700 pb-16">
          <Projects />

          <Experience />
          <Skills />
          <Education />
        </div>
        <ContactUs />

      </div>

      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;
