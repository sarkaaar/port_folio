import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
// import "./App.css";

function App() {
  return (
    <>

      <Header />
      <div>
        <About />
        <div className="bg-slate-700">
          <Projects />
          <Skills />
          <Experience />
        </div>
        <ContactUs />

      </div>

      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;
