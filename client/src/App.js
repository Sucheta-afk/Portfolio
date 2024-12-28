import Layout from "./components/Layout/Layout";
import Techstack from "./pages/Techstack/Techstack";
import About from './pages/about/about';
import Projects from "./pages/projects/projects";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/workexp/workexp";
import Testimonials from "./pages/testimonials/testimonial";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <>
      <Layout/>    
      <div className="container">
        <About/>
        <Education/>
        <WorkExp/>
        <Techstack/>
        <Projects/>
        <Testimonials/>
        <Contact/>
        </div>  
      
    </>
  );
}

export default App;
